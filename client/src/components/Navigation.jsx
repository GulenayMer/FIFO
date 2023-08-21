import {NavLink} from 'react-router-dom'


const Navigation = () => {
  return (
	<div>
		<NavLink to='/' className={({ isActive, isPending }) => isPending ? 'pending' : isActive ? 'active' : ''}>
			Home
		</NavLink>
		<NavLink to='/profile'>Profile</NavLink>
		<NavLink to='/menu'>Menu</NavLink>
		<NavLink to='/dishes'>Dishes</NavLink>
		<NavLink to='/inventoryItems'>Inventory Items</NavLink>
		<NavLink to='/inventory'>Inventory</NavLink>
	</div>
  )
}

export default Navigation