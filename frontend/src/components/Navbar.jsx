import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
function Navbar() {
	const { authInfo, handleLogout } = useAuth();
	const { profile } = authInfo;

	return (
		<div className="w-screen fixed  bg-white pl-5 pr-5 flex justify-between h-10 border-2">
			<div className="flex items-center ">
				<Link className="mr-5" to="/">
					Logo
				</Link>
				<Link
					className="hover:border-b-blue-500 hover:border-b-2 transition-all ease-in-out duration-100"
					to="/"
				>
					Home
				</Link>
			</div>
			{authInfo.isLoggedIn ? (
				<div className="flex items-center ">
					<Link
						className="hover:border-b-blue-500 mr-5 hover:border-b-2 transition-all ease-in-out duration-100"
						to={`/${profile?.id}`}
					>
						{profile?.name}
					</Link>
					<Link
						className="hover:border-b-blue-500 hover:border-b-2 transition-all ease-in-out duration-100"
						onClick={handleLogout}
					>
						Log Out
					</Link>
				</div>
			) : (
				<div className="flex items-center ">
					<Link
						className="hover:border-b-blue-500 mr-5 hover:border-b-2 transition-all ease-in-out duration-100"
						to="/auth/signin"
					>
						Sign In
					</Link>
					<Link
						className="hover:border-b-blue-500 hover:border-b-2 transition-all ease-in-out duration-100"
						to="/auth/signup"
					>
						Sign Up
					</Link>
				</div>
			)}
		</div>
	);
}

export default Navbar;
