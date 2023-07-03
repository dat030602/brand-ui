import React from "react";

import styles from "./Register.module.scss";

function Register({ children }) {
	return (
		<>
			<div className="container">
				<div className={`${styles["main"]} pt-4 pb-4`}>
					<div
						className={`${styles["content"]} bg-w p-5 pt-3 pb-3 border rounded`}
					>
						<div className={`${styles["title"]} mb-4 mt-3`}>
							<h5>Register</h5>
						</div>
						<div className="d-flex">
							<label for="" className="mb-2">
								Full name
							</label>
							<input
								type="text"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your name"
							/>
						</div>
						<div className="d-flex mt-4">
							<label for="" className="mb-2">
								Email
							</label>
							<input
								type="email"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your email"
							/>
						</div>
						<div className="d-flex mt-4">
							<label for="" className="mb-2">
								Phone
							</label>
							<input
								type="password"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your phone number"
							/>
						</div>
						<div className="d-flex mt-4">
							<label for="" className="mb-2">
								Password
							</label>
							<input
								type="password"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your password"
							/>
						</div>
						<div className="d-flex mt-4">
							<label for="" className="mb-2">
								Confirm password
							</label>
							<input
								type="password"
								className="border rounded p-3 pt-2 pb-2"
								placeholder="Enter your password"
							/>
						</div>
						<div className="mt-4 d-flex ">
							<a
								href="/"
								className="btn btn-primary p-5 pt-2 pb-2"
							>
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
