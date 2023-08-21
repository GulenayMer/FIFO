import Home from "../pages/Home";
import Profile from "../pages/private/Profile";
import Menu from "../pages/private/Menu";
import Dishes from "../pages/private/Dishes";
import Inventory from "../pages/private/Inventory";
import InventoryItems from "../pages/private/InventoryItems";
import Contact from "../pages/Contact";
import Error from "../pages/Error";


import {
	createBrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
	{
		path: "/",
		element: (
		<Home />
		),
	},
	{
		path: "/profile",
		element: (
		<Profile />
		)
	},
	{
		path: "/menu",
		element: (
		<Menu />
		)
	},
	{
		path: "/dishes",
		element: (
		<Dishes />
		)
	},
	{
		path: "/inventoryItems",
		element: (
		<InventoryItems />
		)
	},
	{
		path: "/inventory",
		element: (
		<Inventory />
		)
	},
	{
		path: "/contact",
		element: (
		<Contact />
		)
	},
	{
		path: "*",
		element: (
			<Error />
		)
	},
]);

export default router; 