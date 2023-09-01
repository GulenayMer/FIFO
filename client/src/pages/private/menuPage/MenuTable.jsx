import { useEffect, useState } from "react"
import instance from "../../../components/axios/axiosInstance";

const MenuAll = () => {
	const [menu, setMenu] = useState(null);

	const getMenu = async() => {
		try{
			const res = await instance.get('api/menu');
			setMenu(res.data)
			console.log('menusss', res.data);
		}catch(error){
			console.log(error.response);
		}
	}

	useEffect( () => {
		getMenu();
	}, []);

  return (
	<div className="flex flex-col justify-center items-center w-full">
		<h2 className="font-bold">MENU</h2>
		<ul className="w-full">
		{ menu &&
			menu.map((item) => (
			<li key={item._id} className="font-bold border-2 border-yellow-500">
				<h2>Menu Name: {item.name}</h2>
				<ul>
				{item.dishes && 
					item.dishes.map( (i) => (
					<li key={i._id} className="">
						<h5>Dish Name: {i.dish?._id}</h5>
					</li>
				))}
				</ul>
			</li>
			))
		}
		</ul>
	</div>
  )
}

export default MenuAll