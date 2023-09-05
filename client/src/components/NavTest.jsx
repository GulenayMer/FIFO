import Logo from '../assets/Avatar.png'
import { AuthContext } from '../context/Auth';
import { useContext } from 'react';
import {HiHand} from 'react-icons/hi'
import logo from '../assets/logo.png'

function Navbar() {

	const { user } = useContext(AuthContext);
	return (
  
			<div className="w-full fixed top-0 bg-white ">
			  <div className="border-b-2 border-b-gray-100 h-14 justify-start items-center mx-auto px-4 flex ">
				<div className='flex text-center'>
					<img className='h-9' src= {logo} alt="FIFO Logo" />
					<p className='font-semibold italic ml-2 text-3xl'>FIFO</p>
				</div>
			{ user && ( 	
			<div className="lg:block mr-auto ml-40 hidden relative max-w-xs">
                <p className="pl-3 items-center flex absolute inset-y-0 left-0 pointer-events-none">
                      <span className="items-center justify-center flex">
                        <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                          strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0
                      11-14 0 7 7 0 0114 0z"/></svg>
                  </span>
                </p>
				  <input placeholder="Type to search" type="search" className="border border-gray-300
				sm:text-sm w-full rounded-lg pt-2 pb-2 pl-10 px-3 py-2"/>
				</div> )}
				{user && (
					<div className="md:space-x-6 justify-end items-center ml-auto flex space-x-3">
				  <div className="justify-center items-center flex relative">
					 <span className="justify-center items-center flex mr-1 ">
							<HiHand></HiHand>
					</span>
					<p className="font-semibold text-sm mr-2">Hi, {user?.name}</p>
					<img src={Logo}
					  className="object-cover btn- h-9 w-9 rounded-full mr-2 bg-gray-200" alt="" />
				  </div>
				</div>
				)}
				
			  </div>
			</div>
	);
  }
  
  export default Navbar;