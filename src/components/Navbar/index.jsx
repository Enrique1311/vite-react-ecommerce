import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	const activeStyle = "underline underline-offset-8 decoration-4";

	return (
		<nav className="bg-green-200 flex justify-between items-center top-0 h-14 px-5 text-slate-700 fixed z-10 w-screen">
			<ul className="flex gap-4">
				<li className="text-white font-extrabold bg-blue-600 rounded-lg px-2">
					<NavLink to="/">E-SHOPP</NavLink>
				</li>
				<li>
					<NavLink
						to="/"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						All
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/clothes"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Clothes
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/electronics"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Electronics
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Furnitures"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Furnitures
					</NavLink>
				</li>
				<li>
					<NavLink
						to="toys"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Toys
					</NavLink>
				</li>
				<li>
					<NavLink
						to="others"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Others
					</NavLink>
				</li>
			</ul>
			<ul className="flex gap-4">
				<li className="text-blue-600">enriquespinelli.coder@gmail.com</li>
				<li>
					<NavLink
						to="/my-orders"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Orders
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/my-account"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						My Account
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/sign-in"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Sign In
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/cart"
						className={({ isActive }) => (isActive ? activeStyle : undefined)}
					>
						Cart
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
