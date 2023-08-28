import { createContext, useState, useEffect } from 'react';
import instance from '../components/axios/axiosInstance'//
import { useNavigate } from 'react-router-dom';

// instantiation of createContext 
export const AuthContext = createContext();

// Provider let us access to all the data & pass the data to the components needs to use it
const AuthProvider = ({ children }) => {
	const[user,setUser]=useState(null);
	const[loading, setLoading]=useState(true);
	const[errors, setErrors]=useState(null);
	const navigate = useNavigate();

	const handleStates = (user, loading, errors) => {
		setUser(user);
		setLoading(loading);
		setErrors(errors)
	}

useEffect(()=>{
	instance.get('/api/user/auth/currentUser')
	.then(res => {
		console.log('USER ', res.data.user)
		handleStates(res.data.user, false, null);
		navigate('/');
	})
	.catch(error =>{
		console.log(error);
		handleStates(null, false, null);
	})
},[]);



	const handleLogin = async( user )=> {
		setLoading(true);
		try{
			const res = await instance.post('api/user/auth/login', user);
			handleStates(res.data.user, false, null);
			//will change in the future "the looks" for loged in or not
			//navigate('/');
		}catch(error){
			console.log(error.response)
			handleStates(null,false,error.response.errors);
		}
	}

	const handleRegister = async(user) =>{
		setLoading(true);
		try{
			const res = await instance.post('api/user/auth/register', user);
			handleStates(res.data.user, false, null);
			//navigate('/');
		}catch(error){
			console.log(error.response)
			handleStates(null,false,error.response.errors);
		}
	}

	const handleLoguot = async () =>{
		try{
			const res = await instance.post('api/user/auth/logout', {});
			handleStates(null, false, null);
			//navigate('/');
			window.location.reload()
		}catch(error){
			console.log(error.response)
			handleStates(null,false,error.response.errors);
		}
	}

	
	return (	
	<AuthContext.Provider 
		value={{user, loading, errors, handleLogin, handleRegister, handleLoguot}}>
		{children}
	</AuthContext.Provider>
)
}


export default AuthProvider;