import React from "react";

const Card = (data) => {
	console.log(data);
	return (
		<div className="cursor-pointer w-74 h-80 bg-white border-b-2">
			<figure className="relative mb-2 w-full h-4/5">
				<span className="absolute bottom-0 left-0 rounded-lg bg-white/60 tr text-black m-2 px-4 py-0.5">
					{data.data.category.name}
				</span>
				<img
					className="w-full h-full object-cover rounded-lg"
					src={data.data.images[0]}
					alt={data.data.title}
				/>
				<div className="flex justify-center items-center absolute top-2 right-2 bg-blue-600 text-white px-2 rounded-full">
					Add to cart
				</div>
			</figure>
			<p className="flex justify-between items-center ">
				<span className="text-md font-small">{data.data.title}</span>
				<span className="text-lg font-medium">${data.data.price}</span>
			</p>
		</div>
	);
};

export default Card;
