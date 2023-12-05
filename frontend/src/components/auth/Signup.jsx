import React, { useState } from "react";
import CustomInput from "../form/CustomInput";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { signUpUser } from "../../api/auth";

export default function Signup() {
	const navigate = useNavigate();
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		password: "",
	});
	const handleChange = ({ target }) => {
		const { value, name } = target;
		setUserInfo({ ...userInfo, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await signUpUser(userInfo);
		if (res.error) return toast.error(res.error);
		toast.success("SignUp Successful");
		navigate("/auth/signin");
	};
	const { name, email, password } = userInfo;
	return (
		<div className="fixed inset-0 bg-gray-200 -z-10 flex justify-center items-center">
			<div className="w-screen mx-[50%] bg-white drop-shadow-lg rounded-lg p-6 space-y-6 ">
				<form
					onSubmit={handleSubmit}
					className="bg-white  rounded p-6 space-y-6 w-72 flex flex-col"
				>
					<label className="flex justify-center text-xl" htmlFor="email">
						Sign Up
					</label>
					<CustomInput
						onChange={handleChange}
						value={name}
						placeholder="John"
						name="name"
						label="Name"
						type="text"
					/>
					<CustomInput
						onChange={handleChange}
						value={email}
						placeholder="hireme@email.com"
						name="email"
						label="Email"
						type="email"
					/>

					<CustomInput
						onChange={handleChange}
						value={password}
						label="Password"
						placeholder="******"
						name="password"
						type="password"
					/>

					<button
						type="submit"
						className="border-2 p-2 w-full rounded bg-gray-400 flex justify-center items-center text-white border-gray-400 cursor-pointer hover:bg-white hover:text-black transition ease-in-out duration-500"
						value="Sign in"
					>
						Sign Up
					</button>
					<div className="flex justify-between">
						<Link
							className="  transition text-gray-500 hover:text-black"
							to="/auth/signin"
						>
							Sign In
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
