import React from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { LuBedSingle, LuBath } from "react-icons/lu";
function Card({ url, location, name, price, beds, bathrooms }) {
	return (
		<div className="flex overflow-clip m-2 mt-1 flex-col w-[15rem] h-[15rem] rounded-md border-2 ">
			<div className="h-[60%]">
				<img src={url} className=" " alt="toLet" />
			</div>
			<div className="flex-1 bg-blue-200 pl-2 pr-2">
				<p className="flex items-center text-sm">
					<MdCurrencyRupee />
					{price}
				</p>
				<p className="text-sm  font-bold">{name}</p>
				<h3 className="text-sm font-light">{location}</h3>
				<div className=" border-[0.25px] border-blue-400 w-full "></div>
				<div className="flex justify-between">
					<span className="flex items-center">
						<LuBedSingle className="mr-2" /> {beds} beds
					</span>
					<span className="flex items-center">
						<LuBath className="mr-2" /> {bathrooms} bathrooms
					</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
