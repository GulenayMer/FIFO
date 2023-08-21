import Home from "../pages/Home";
import Profile from "../pages/Proifle";
import Menu from "../pages/Menu";
import Dishes from "../pages/Dishes";
import Inventory from "../pages/Inventory";
import InventoryItems from "../pages/InventoryItems";
import Contact from "../pages/Contact";
import Error from "../pages/Error";


import {
	createBrowserRouter,
} from "react-router-dom";


export const router = createBrowserRouter([
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