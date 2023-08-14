import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eraseCookie, setCookie } from "~/utils/cookies";

import styles from "./Register.module.scss";
import * as AuthenticationServices from "~/services/AuthenticationServices";

function Register({ children }) {
	const [dataInput, setDataInput] = useState({
		user: "",
		name: "",
		phone: "",
		date: "1990/1/1",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const [textError, setTextError] = useState({
		fill: { all: false, confirmPassword: false, email: false },
		cantRequest: false,
	});

	const navigate = useNavigate();

	const HandleOnChange = (e) => {
		const { value, name } = e.target;
		if (name === "Username") {
			if (value.length <= 10)
				setDataInput(() => {
					var newData = { ...dataInput };
					newData.user = value;
					return newData;
				});
		} else if (name === "Full name") {
			if (value.length <= 10)
				setDataInput(() => {
					var newData = { ...dataInput };
					newData.name = value;
					return newData;
				});
		} else if (name === "Date of Birth") {
			if (value.length <= 20)
				setDataInput(() => {
					var newData = { ...dataInput };
					newData.date = value;
					return newData;
				});
		} else if (name === "Phone number") {
			if (value.length <= 20)
				setDataInput(() => {
					var newData = { ...dataInput };
					newData.phone = value;
					return newData;
				});
		} else if (name === "Email") {
			if (value.length <= 100) {
				setDataInput(() => {
					var newData = { ...dataInput };
					newData.email = value;
					return newData;
				});
				if (value.search("@gmail.com") === -1)
					setTextError(() => {
						var newData = { ...textError };
						newData.fill.email = true;
						return newData;
					});
				else
					setTextError(() => {
						var newData = { ...textError };
						newData.fill.email = false;
						return newData;
					});
			}
		} else if (name === "Password") {
			if (value.length <= 20)
				setDataInput(() => {
					var newData = { ...dataInput };
					newData.password = value;
					return newData;
				});
		} else if (name === "Confirm password") {
			if (value.length <= 20) {
				setDataInput(() => {
					var newData = { ...dataInput };
					newData.confirmPassword = value;
					return newData;
				});
				if (textError.fill.password !== textError.fill.confirmPassword)
					setTextError(() => {
						var newData = { ...textError };
						newData.fill.confirmPassword = true;
						return newData;
					});
				else
					setTextError(() => {
						var newData = { ...textError };
						newData.fill.confirmPassword = false;
						return newData;
					});
			}
		}
	};
	const HandleSubmit = async () => {
		if (
			dataInput.user === "" ||
			dataInput.name === "" ||
			dataInput.phone === "" ||
			dataInput.date === "1990/1/1" ||
			dataInput.email === "" ||
			dataInput.password === "" ||
			dataInput.confirmPassword === ""
		) {
			setTextError((pre) => {
				var newData = { ...pre };
				newData.fill.all = true;
				newData.fill.confirmPassword = false;
				newData.fill.email = false;
				newData.cantRequest = false;
				return newData;
			});
		} else {
			const result = await AuthenticationServices.Register(dataInput);
			if (result.data.returnValue === 1) {
				navigate("/login");
			} else {
				setTextError((pre) => {
					var newData = { ...pre };
					newData.fill.all = false;
					newData.fill.confirmPassword = false;
					newData.fill.email = false;
					newData.cantRequest = true;
					return newData;
				});
			}
		}
	};
	return (
		<>
			<div className="container">
				<div className={`${styles["main"]} pt-4 pb-4`}>
					<div className={`${styles["content"]} bg-w p-5 pt-3 pb-3 border rounded`}>
						<div className={`${styles["title"]} mb-4 mt-3`}>
							<h5>Register</h5>
						</div>
						<div className="d-flex">
							<label htmlFor="" className="mb-2">
								User name
							</label>
							<input
								type="text"
								className="border rounded p-3 pt-2 pb-2"
								name="Username"
								placeholder="Enter your username"
								value={dataInput.user}
								onChange={(e) => HandleOnChange(e)}
							/>
						</div>
						<div className="d-flex">
							<label htmlFor="" className="mb-2">
								Full name
							</label>
							<input
								type="text"
								className="border rounded p-3 pt-2 pb-2"
								name="Full name"
								placeholder="Enter your name"
								value={dataInput.name}
								onChange={(e) => HandleOnChange(e)}
							/>
						</div>

						<div className="d-flex mt-4">
							<label htmlFor="" className="mb-2">
								Date of Birth
							</label>
							<input
								type="date"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your birth"
								name="Date of Birth"
								value={dataInput.date}
								onChange={(e) => HandleOnChange(e)}
							/>
						</div>
						<div className="d-flex mt-4">
							<label htmlFor="" className="mb-2">
								Email
							</label>
							<input
								type="email"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your email"
								name="Email"
								value={dataInput.email}
								onChange={(e) => HandleOnChange(e)}
							/>
						</div>
						{textError.fill.email && (
							<div className="d-flex mt-2">
								<p className="text-danger" style={{ fontSize: "14px" }}>
									Password incorrect
								</p>
							</div>
						)}
						<div className="d-flex mt-4">
							<label htmlFor="" className="mb-2">
								Phone number
							</label>
							<input
								type="password"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your phone number"
								name="Phone number"
								value={dataInput.phone}
								onChange={(e) => HandleOnChange(e)}
							/>
						</div>
						<div className="d-flex mt-4">
							<label htmlFor="" className="mb-2">
								Password
							</label>
							<input
								type="password"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your password"
								name="Password"
								value={dataInput.password}
								onChange={(e) => HandleOnChange(e)}
							/>
						</div>
						<div className="d-flex mt-4">
							<label htmlFor="" className="mb-2">
								Confirm password
							</label>
							<input
								type="password"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your password"
								name="Confirm password"
								value={dataInput.confirmPassword}
								onChange={(e) => HandleOnChange(e)}
							/>
						</div>
						{textError.fill.confirmPassword && (
							<div className="d-flex mt-2">
								<p className="text-danger" style={{ fontSize: "14px" }}>
									Password incorrect
								</p>
							</div>
						)}
						{textError.fill.all && (
							<div className="d-flex mt-2">
								<p className="text-danger" style={{ fontSize: "14px" }}>
									Please enter full information
								</p>
							</div>
						)}
						<div className="mt-4 d-flex ">
							<a href="/" className="btn btn-primary p-5 pt-2 pb-2" onClick={() => HandleSubmit()}>
								Submit
							</a>
						</div>
						<div className="mt-4 d-flex">
							<div className="d-flex justify-content-center">
								<span>Already have account?</span>
								<a href="/login" className="link ml-1">
									Sign in
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Register;
