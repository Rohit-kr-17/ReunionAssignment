import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMyListing } from "../api/property";
import Card from "./Card";
function MyListings() {
	const [myListings, setMyListing] = useState([]);
	const params = useParams();
	const getMyListing = async () => {
		try {
			const { property } = await fetchMyListing(params.slugs);
			setMyListing(property);
			console.log(property); // Log the fetched data
		} catch (error) {
			console.error("Error fetching listings:", error);
		}
	};
	useEffect(() => {
		getMyListing();
		console.log(myListings);
	}, [params.slugs]);
	return (
		<div className="flex flex-wrap items-center justify-center">
			{myListings?.map((item) => (
				<div key={item._id} className="flex flex-wrap flex-row">
					<Card
						url={item.image.url}
						location={item.location}
						name={item.name}
						price={item.price}
						beds={item.propertyType.beds}
						bathrooms={item.propertyType.bathrooms}
					/>
				</div>
			))}
		</div>
	);
}

export default MyListings;
