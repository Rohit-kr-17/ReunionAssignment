import React from "react";
import Navbar from "./components/Navbar";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Signin from "./components/auth/Signin";
import { useAuth } from "./context/AuthProvider";
import MyListings from "./components/MyListings";
export default function App() {
	const { authInfo } = useAuth();
	if (authInfo.isLoggedIn) {
		return (
			<div className="flex flex-col ">
				<Navbar />
				<div className="flex-col pt-[4rem] p-5 flex-1">
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/:slugs" element={<MyListings />} />
						<Route path="*" element={<Navigate replace to="/" />} />
					</Routes>
				</div>
			</div>
		);
	}
	return (
		<>
			<div className="flex flex-col ">
				<Navbar />
				<div className="flex-col pt-[4rem] p-5 flex-1">
					<Routes>
						<Route path="" element={<Home />} />
						<Route path="/auth/signin" element={<Signin />} />
						<Route path="/auth/signup" element={<Signup />} />
					</Routes>
				</div>
			</div>
		</>
	);
}
