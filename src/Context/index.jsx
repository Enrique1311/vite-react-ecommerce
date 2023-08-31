import React, { createContext, useState } from "react";

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
	const [counter, setCounter] = useState(0);

	return (
		<ShoppingCartProvider
			value={{
				counter,
				setCounter,
			}}
		>
			{children}
		</ShoppingCartProvider>
	);
};
