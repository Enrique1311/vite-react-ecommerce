import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Home = () => {
	const [items, setItems] = useState(null);

	const apiUrl = "https://api.escuelajs.co/api/v1/products";

	useEffect(() => {
		fetch(apiUrl)
			.then((res) => res.json())
			.then((data) => setItems(data));
	}, []);

	return (
		<Layout>
			<div className="flex justify-center flex-wrap gap-12 w-full">
				{items?.map((item) => (
					<Card
						key={item.id}
						data={item}
					/>
				))}
			</div>
		</Layout>
	);
};
export default Home;
