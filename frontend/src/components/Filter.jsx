import React, { useState } from "react";
import { filterProperty } from "../api/property";

const Filter = ({ setListing }) => {
	const [formData, setFormData] = useState({
		location: undefined,
		dateOfAvailability: undefined,
		Price: 0,
		propertyType: undefined,
	});

	const indianCities = [
		"Mumbai",
		"Delhi",
		"Bangalore",
		"Hyderabad",
		"Chennai",
		"Kolkata",
		"Ahmedabad",
		"Pune",
		"Jaipur",
		"Lucknow",
	];

	const handleDateChange = (e) => {
		setFormData({ ...formData, dateOfAvailability: e.target.value });
	};
	const handleTypeChange = (e) => {
		setFormData({ ...formData, propertyType: e.target.value });
	};

	const handleCityChange = (e) => {
		setFormData({ ...formData, location: e.target.value });
	};

	const handlePriceChange = (e) => {
		setFormData({ ...formData, Price: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const res = await filterProperty(formData);
		setListing(res);
		// Handle form submission logic here
		console.log(res);
	};

	return (
		<>
			<form
				onSubmit={handleSubmit}
				className="bg-blue-500 flex p-2 flex-wrap rounded-md md:rounded-full items-center justify-center text-white"
			>
				<div className="flex flex-col w-[10rem] items-center justify-center">
					<label>Select city</label>
					<select
						className="border-2 pl-2 pr-5 flex outline-none text-center appearance-none rounded-full bg-blue-500 text-white"
						value={formData.location}
						onChange={handleCityChange}
					>
						<option value="">Select City</option>
						{indianCities.map((city) => (
							<option key={city} value={city}>
								{city}
							</option>
						))}
					</select>
				</div>
				<span className="md:border-[0.1rem] h-0  md:rounded-full md:h-10 "></span>
				<div className="flex flex-col w-[10rem] items-center justify-center">
					<label>Select Price:</label>
					<input
						type="range"
						min="0"
						max="1000"
						step="1"
						value={formData.Price}
						onChange={handlePriceChange}
					/>

					<span>{formData.Price}</span>
				</div>

				<span className="md:border-[0.1rem] h-0 rounded-full md:h-10 "></span>
				<div className="flex flex-col ml-5 w-[10rem] items-center justify-center">
					<label>Select Date</label>
					<input
						onChange={handleDateChange}
						className="rounded-full flex items-center justify-center appearance-none text-black pl-2 pr-2 "
						type="date"
					></input>
				</div>
				<span className="md:border-[0.1rem] h-0 rounded-full md:h-10 "></span>
				<div className="flex flex-col w-[10rem] items-center justify-center">
					<label>Select Property Type</label>
					<select
						className="border-2 pl-2 pr-5 flex outline-none text-center appearance-none rounded-full bg-blue-500 text-white"
						value={formData.propertyType}
						onChange={handleTypeChange}
					>
						<option value="">Property Type</option>
						<option value="Rent">Rent</option>
						<option value="Sell">Sell</option>
					</select>
				</div>
				<span className="md:border-[0.1rem] h-0 rounded-full md:h-10 "></span>
				<button
					className="pl-5 pr-5 p-2 bg-blue-900 rounded-full"
					type="submit"
				>
					Submit
				</button>
			</form>
		</>
	);
};

export default Filter;
