import React, { useContext, useState } from "react";
import CustomInput from "../form/CustomInput";
import { Link } from "react-router-dom";
import Submit from "../form/Submit";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthProvider";
export default function Signin() {
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});
	const { handleLogin, authInfo } = useAuth();
	const { isPending } = authInfo;
	const handleSubmit = async (e) => {
		e.preventDefault();
		handleLogin(userInfo.email, userInfo.password);
	};

	const handleChange = ({ target }) => {
		const { value, name } = target;
		setUserInfo({ ...userInfo, [name]: value });
	};
	const { email, password } = userInfo;
	return (
		<>
			<div className="fixed inset-0 bg-gray-200 -z-10 flex justify-center items-center">
				<div className="w-screen mx-[50%] bg-white drop-shadow-lg rounded-lg p-6 space-y-6 ">
					<form
						onSubmit={handleSubmit}
						className="bg-white  rounded p-6 space-y-6 w-72 flex flex-col"
					>
						<label className="flex justify-center text-xl" htmlFor="email">
							Sign In
						</label>
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

						<Submit value="Sign in" busy={isPending} />
						<div className="flex justify-between">
							<Link
								className="  transition  text-gray-500 hover:text-black"
								to="/auth/signup"
							>
								Sign Up
							</Link>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}
