import React from "react";
import { Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrders from "../MyOrders";
import Order from "../Order";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import Navbar from "../../components/Navbar";

const App = () => {
	return (
		<ShoppingCartProvider>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/my-account"
					element={<MyAccount />}
				/>
				<Route
					path="/my-orders"
					element={<MyOrders />}
				/>
				<Route
					path="/order"
					element={<Order />}
				/>
				<Route
					path="/sign-in"
					element={<SignIn />}
				/>
				<Route
					path="/not-found"
					element={<NotFound />}
				/>
			</Routes>
		</ShoppingCartProvider>
	);
};

export default App;
