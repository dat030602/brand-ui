import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import styles from "./Header.module.scss";
// import image from  "../../../assets/image";

// import classNames from "classnames/bind";

// const cx = classNames.bind(styles);
function Header({ children, isPageNoSearch = false, isAdmin = false }) {
	var componentActive = "";
	var isLogin = false;
	const navigate = useNavigate()
	const [data, setData] = useState();
	const [input, setInput] = useState("");
	const [results, setResults] = useState([]);
	const fetchData = (value) => {
		fetch(`http://localhost:5000/manage-products/all`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			//signal: abortController.signal,
		})
			.then((response) => response.json())
			.then((json) => {
				const results = json.filter((user) => {
					return value && user && user.TEN_SP && user.TEN_SP.toLowerCase().includes(value);
				});
				setResults(results);
			});
	}
	const fetchData1 = (value, category) => {
		fetch(`http://localhost:5000/manage-products/searchcategory/${category}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			//signal: abortController.signal,
		})
			.then((response) => response.json())
			.then((json) => {
				const results = json.filter((user) => {
					return value && user && user.TEN_SP && user.TEN_SP.toLowerCase().includes(value);
				});
				console.log(results);
				setResults(results);
			});
	}
	const handleChange = (value) => {
		setInput(value)
		var e = document.getElementById("getvalueoption");
		var cat = e.value;
		if (cat === "all") {
			fetchData(value);
		}
		else {
			fetchData1(value, cat);
		}
	}
	const handleSearch = () => {
		const abortController = new AbortController();
		var e = document.getElementById("getvalueoption");
		var cat = e.value;
		if (cat === "all") {
			fetch(`http://localhost:5000/manage-products/${input}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				signal: abortController.signal,
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setData(data);
					navigate("/products", {
						state: {
							message: { data }
						}
					});
				});
			return () => {
				abortController.abort();
			};
		}
		else {
			fetch(`http://localhost:5000/manage-products/category/${cat}/${input}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
				signal: abortController.signal,
			})
				.then((res) => {
					return res.json();
				})
				.then((data) => {
					setData(data);
					navigate("/products", {
						state: {
							message: { data }
						}
					});
				});
			return () => {
				abortController.abort();
			};
		}
	}

	return (
		<>
			<header>
				<div className={!isAdmin ? "container" : "pl-4 pr-4"}>
					<div className={`${styles["header"]} row`}>
						<div className={`${styles["logo"]} col-md-auto`}>
							<a className={`${styles["logo-link"]}`} href="/">
								<img
									src="./assets/image/logo-colored.png"
									alt="s"
								/>
							</a>
						</div>
						{!isPageNoSearch && !isAdmin && (
							<div className={`${styles["search"]} col`}>
								<div className={`${styles["search-row"]} row`}>
									<div
										className={`${styles["search-col"]} col-md-auto`}
									>
										<input
											className={`${styles["input"]}`}
											type="text"
											placeholder="Tìm kiếm..."
											value={input} onChange={(e) => handleChange(e.target.value)}
										/>
									</div>
									<div
										className={`${styles["search-col"]} col-md-auto`}
									>
										<select
											className={`${styles["selection"]}`}
											id="getvalueoption"
										>
											<option value="all">Tất cả</option>
											<option value="phone">Điện thoại</option>
											<option value="ipad">Ipad</option>
											<option value="charge">Cục sạc</option>
											<option value="headphone">Tai nghe</option>
										</select>
									</div>
									<a
										onClick={handleSearch}
										className={`${styles["icon-search"]} col-md-auto ${styles["search-col"]}`}
									>
										<img
											src="./assets/svg/search.svg"
											alt="d"
										/>
									</a>
								</div>
								{results.length !== 0 && (<div className={`${styles["dropdown"]}`}>
									<div className={`${styles["dropdown-row"]}`}>
										{
											results && results.map((result, id) => {
												return <div className={`${styles["e"]}`} key={id}>
													<a href="/product" >{result.TEN_SP}</a>
												</div>
											})
										}
									</div>
								</div>)}
							</div>
						)}
						<div className={`${styles["action"]} col-md-auto`}>
							<div className="row">
								{isLogin && isAdmin && (
									<div className="col ml-2 d-flex justify-content-end">
										<div
											href="/"
											className="btn btn-danger p-1 pr-2 pl-2"
										>
											Logout
										</div>
									</div>
								)}
								{!isLogin && (
									<div className="col ml-2">
										<a
											href="/login"
											className="btn btn-outline-primary p-1 pr-2 pl-2"
										>
											Sign in
										</a>
									</div>
								)}
								{!isLogin && (
									<div className="col ml-2">
										<a
											href="/register"
											className="btn btn-primary p-1 pr-2 pl-2"
										>
											Register
										</a>
									</div>
								)}
								{isLogin && !isAdmin && (
									<div className="col ml-2">
										<a
											href="/personal/edit"
											className={`${styles["action-icon"]}`}
										>
											<img
												src="./assets/svg/profile.svg"
												alt="/"
											/>
											<span>Profile</span>
										</a>
									</div>
								)}
								{isLogin && !isAdmin && (
									<div className="col ml-2">
										<a
											href="/favorite"
											className={`${styles["action-icon"]}`}
										>
											<img
												src="./assets/svg/favourite.svg"
												alt="/"
											/>
											<span>Favorite</span>
										</a>
									</div>
								)}
								{isLogin && !isAdmin && (
									<div className="col ml-2">
										<a
											href="/my-cart"
											className={`${styles["action-icon"]}`}
										>
											<img
												src="./assets/svg/cart.svg"
												alt="/"
											/>
											<span>Cart</span>
											<div
												className={`${styles["amount"]}`}
											>
												1
											</div>
										</a>
									</div>
								)}
							</div>
						</div>

					</div>

				</div>
				<div className="line"></div>
				{!isPageNoSearch && !isAdmin && (
					<div className="container">
						<div className={`${styles["menu"]}`}>
							<div className={`${styles["menu-item"]}`}>
								<div>
									<img src="./assets/svg/menu.svg" alt="" />
								</div>
								<div>All category</div>
							</div>
							<div className={`${styles["menu-item"]}`}>
								<a href="/hot-offers">Hot offers</a>
							</div>
						</div>
					</div>
				)}
				{!isPageNoSearch && <div className="line"></div>}
			</header>
		</>
	);
}
export default Header;
