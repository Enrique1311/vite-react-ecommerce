import React from "react";

const Layout = ({ children }) => {
	return (
		<div className="flex flex-col justify-center items-center p-4 mt-14">
			{children}
		</div>
	);
};

export default Layout;
