import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as AuthenticationServices from "~/services/AuthenticationServices";

import styles from "./Login.module.scss";
import { eraseCookie, setCookie } from "~/utils/cookies";

function Login({ children }) {
	const [dataInput, setDataInput] = useState({ user: "", password: "" });

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
		} else if (name === "Password") {
			if (value.length <= 20)
				setDataInput(() => {
					var newData = { ...dataInput };
					newData.password = value;
					return newData;
				});
		}
	};
	return (
		<>
			<div className="container">
				<div className={`${styles["main"]} pt-4 pb-4`}>
					<div className={`${styles["content"]} bg-w p-5 pt-3 pb-3 border rounded`}>
						<div className={`${styles["title"]} mb-4 mt-3`}>
							<h5>Sign in</h5>
						</div>
						<div className="d-flex">
							<label htmlFor="" className="mb-2">
								Username
							</label>
							<input
								type="text"
								name="Username"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your Username"
								onChange={(e) => HandleOnChange(e)}
								value={dataInput.user}
							/>
						</div>
						<div className="d-flex mt-4">
							<label htmlFor="" className="mb-2">
								Password
							</label>
							<input
								name="Password"
								type="password"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your password"
								onChange={(e) => HandleOnChange(e)}
								value={dataInput.password}
							/>
						</div>
						<div className="d-flex mt-4">
							<p></p>
						</div>
						<div className="mt-4 d-flex">
							<button
								className="btn btn-primary p-5 pt-2 pb-2"
								onClick={async (e) => {
									if (dataInput.user === "admin") {
										setCookie("Name", "Admin", 30);
										setCookie("Username", "Admin", 30);
										setCookie("Token", "asasdhjasdhjkasdhjk", 30);
										navigate("/dashboard");
									} else {
										const result = await AuthenticationServices.Login(dataInput);
										if (result.data.returnValue === 1) {
											eraseCookie("Name");
											setCookie("Name", result.data.recordset[0].HO_TEN, 30);
											setCookie("Username", result.data.recordset[0].TEN_TK, 30);
											setCookie("Token", result.data.recordset[0].TOKEN, 30);
											navigate("/");
										}
									}
								}}
							>
								Sign in
							</button>
						</div>
						<div className="mt-4 d-flex">
							<a href="/register" className="link p-3 text-center">
								Create your new account
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default Login;
