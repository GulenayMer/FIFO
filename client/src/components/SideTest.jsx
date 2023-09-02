import { NavLink } from 'react-router-dom';
import { AuthContext } from '../context/Auth';
import { useContext } from 'react';
import {FaHome }from 'react-icons/fa'
import {BiSolidLogIn, BiSolidLogOut, BiSolidRegistered, BiSolidFoodMenu, BiSolidDish} from 'react-icons/bi'
import {MdUnsubscribe, MdInventory} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg';

const navLinkClass = `
font-medium text-sm items-center rounded-lg text-gray-900 px-4 py-2.5 flex
transition-all duration-200 hover:bg-gray-200 group cursor-pointer 
`

const Sidebar = () => {
	const { user, handleLogout } = useContext(AuthContext);

    return (
        <div className=" h-full fixed top-0 left-0 w-60">
            <div className="flex flex-col pt-40 ">
                <div className="h-full flex-col justify-between px-4 flex">
                    <div className="space-y-4">
						<NavLink to="/" className={navLinkClass}>
            				<span>
								<FaHome></FaHome>
                        	</span>
							<span className='ml-4'>Home</span>
						</NavLink>
						{user ? (
          				<>
            			<NavLink to="/profile" className={navLinkClass}>
							<span className="justify-center items-center flex mr-2">
								<CgProfile></CgProfile>
							</span>
                		<span className='ml-2'>Profile</span>
            			</NavLink>
						<NavLink to="/inventoryItems" className={navLinkClass}>
							<span className="justify-center items-center flex">
								<MdInventory></MdInventory>
							</span>
                			<span className='ml-4'>Inventory Items</span>
              			</NavLink>
						  <NavLink to="/dishes" className={navLinkClass}>
							<span className="justify-center items-center flex">
								<BiSolidDish></BiSolidDish>
							</span>
               				<span className='ml-4'>Dishes</span>
						</NavLink>
            			<NavLink to="/menu" className={navLinkClass}>
							<span className="justify-center items-center flex mr-2">
								<BiSolidFoodMenu></BiSolidFoodMenu>
							</span>
              				<span className='ml-2'>Menu</span>
              			</NavLink>
			  			<NavLink to="/" className={navLinkClass}>
				    		<span className="justify-center items-center flex">
								<BiSolidLogOut></BiSolidLogOut>

							</span>
                			<button className='ml-4' onClick={handleLogout}>Logout</button>
						</NavLink>
					</>
        			) : (
          			<>
            		{/*  if user Not logged in (register && login) */}
            			<NavLink to="/login" className={navLinkClass}>
							<span className="justify-center items-center flex">
								<BiSolidLogIn></BiSolidLogIn>
							</span>
							<span className='ml-4'>Login</span>
						</NavLink>
						<NavLink to="/register" className={navLinkClass}>
						<span className="justify-center items-center flex">
								<BiSolidRegistered></BiSolidRegistered>
							</span>
							<span className='ml-4'>Register</span>
						</NavLink>
						<NavLink to="/register" className={navLinkClass}>
						<span className="justify-center items-center flex">
								<MdUnsubscribe></MdUnsubscribe>
							</span>
							<span className='ml-4'>Subscribe</span>
						</NavLink>
					</>
        			)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;