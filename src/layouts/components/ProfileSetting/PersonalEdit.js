import React from "react";

import styles from "./PersonalEdit.module.scss";
import { eraseCookie } from "~/utils/cookies";
import { useNavigate } from "react-router-dom";

function PersonalEdit({ children }) {
	const navigate = useNavigate();

	return (
		<>
			<div className="container">
				<div className="main pt-4 pb-4">
					<div className="row">
						<div className="col-2">
							<div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
								<a href="/">Personal info</a>
							</div>
							<div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
								<a href="/my-cart">My cart</a>
							</div>
							<div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
								<a href="/favorite">Favorite</a>
							</div>
							<div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}>
								<a href="/orders-history">Orders history</a>
							</div>
							<div className={`${styles["side-item"]} rounded pl-3 p-1 mb-2 ${styles["active"]}`}>
								<a href="/personal/edit">Profile setting</a>
							</div>
							<div
								className={`${styles["side-item"]} rounded pl-3 p-1 mb-2`}
								onClick={() => {
									eraseCookie("Name");
									eraseCookie("Token");
									navigate("/");
								}}
								style={{ cursor: "pointer" }}
							>
								<button>Log out</button>
							</div>
						</div>
						<div className="col-10 pl-3">
							<div className="bg-w rounded border p-4">
								<div className={`${styles["title"]} pb-3`}>
									<h3>Profile setting</h3>
								</div>
								<div className="line"></div>
								<div className="mt-4">
									<div className={`${styles["item"]} d-flex mb-3`}>
										<label
											htmlFor=""
											className="d-flex align-items-center justify-content-end mr-4"
										>
											Name
										</label>
										<div className="d-flex align-items-center">
											<input type="text" className="border rounded pr-1 pt-1 pb-1 pl-2" />
										</div>
									</div>
									<div className={`${styles["item"]} d-flex mb-3`}>
										<label
											htmlFor=""
											className="d-flex align-items-center justify-content-end mr-4"
										>
											Email
										</label>
										<div className="d-flex align-items-center">
											<input type="text" className="border rounded pr-1 pt-1 pb-1 pl-2" />
										</div>
									</div>
									<div className={`${styles["item"]} d-flex mb-3`}>
										<label
											htmlFor=""
											className="d-flex align-items-center justify-content-end mr-4"
										>
											Phone number
										</label>
										<div className="d-flex align-items-center">
											<input type="text" className="border rounded pr-1 pt-1 pb-1 pl-2" />
										</div>
									</div>
									<div className={`${styles["item"]} d-flex mb-3`}>
										<label
											htmlFor="a"
											className="d-flex align-items-center justify-content-end mr-4"
										>
											Sex
										</label>
										<div className="d-flex align-items-center">
											<div className="mr-3">
												<label htmlFor="a" className="mr-1">
													Male
												</label>
												<input type="radio" name="a" />
											</div>
											<div className="mr-3">
												<label htmlFor="a" className="mr-1">
													Female
												</label>
												<input type="radio" name="a" />
											</div>
											<div className="mr-3">
												<label htmlFor="a" className="mr-1">
													Other
												</label>
												<input type="radio" name="a" />
											</div>
										</div>
									</div>
									<div className={`${styles["item"]} d-flex mb-3`}>
										<label
											htmlFor=""
											className="d-flex align-items-center justify-content-end mr-4"
										>
											Date of Birth
										</label>
										<div className="d-flex align-items-center">
											<input type="date" className="border rounded pr-1 pt-1 pb-1 pl-2" />
										</div>
									</div>
								</div>
								<div className="d-flex align-items-center justify-content-center mt-4">
									<button className="btn btn-success p-5 pt-2 pb-2">Lưu</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default PersonalEdit;
