import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchProperty } from "../api/property";
import Card from "./Card";
import Filter from "./Filter";

function Home() {
	const [Listings, setListing] = useState([]);
	const params = useParams();
	const getListing = async () => {
		try {
			const { property } = await fetchProperty();
			setListing(property);
			console.log(property); // Log the fetched data
		} catch (error) {
			console.error("Error fetching listings:", error);
		}
	};
	useEffect(() => {
		getListing();
		console.log(Listings);
	}, [params.slugs]);
	return (
		<div className="">
			<Filter setListing={setListing} />
			<div className="flex flex-wrap items-center justify-center">
				{Listings?.map((item) => (
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
			</div>{" "}
		</div>
	);
}

export default Home;
