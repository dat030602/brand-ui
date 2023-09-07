import React,{ Fragment, useEffect, useState } from "react";

import styles from "./ManageCustomers.module.scss";
import { Image } from "~/components/Image";
import * as ManageCustomersServices from '~/services/ManageCustomersServices';

function ManageCustomers({ children }) {
	const [data, setData] = useState([]);
  const [statistics, setStatistics] = useState([]);

  const fetchApi = async () => {
    let result = await ManageCustomersServices.GetData();
    setData(result);
  };
  
  const fetchStatistics = async (name = "This month") => {
    let result;
    if (name === "This month") result = await ManageCustomersServices.GetStatistics_Month();
    else if (name === "This year") result = await ManageCustomersServices.GetStatistics_Year();
    else if (name === "All") result = await ManageCustomersServices.GetStatistics_All();
    setStatistics(result?.recordset);
  };
  useEffect(() => {
    fetchApi();
    fetchStatistics();
  }, []);
  const bronzeTierCustomers = Array.isArray(data.listCustomers) ? data.listCustomers.filter((customer) => {
	// Điều kiện để xác định khách hàng bronze-tier
	return customer.DIEM_THUONG < 200;

  }) : [];
  
  const silverTierCustomers = Array.isArray(data.listCustomers)
  ? data.listCustomers.filter((customer) => {
      // Điều kiện để xác định khách hàng silver-tier
      return customer.DIEM_THUONG >= 200 && customer.DIEM_THUONG < 400;
    })
  : [];
  const goldTierCustomers = Array.isArray(data.listCustomers)
  ? data.listCustomers.filter((customer) => {
      // Điều kiện để xác định khách hàng gold-tier
      return customer.DIEM_THUONG >= 400;
    })
  : [];

  
	return (
		<>
			<nav className={`${styles["side-menu"]} bg-w border`}>
				<div
					className={`${styles["box-user"]} d-flex align-items-center pl-4 pt-4`}
				>
					<div className={`${styles["box-image"]} pr-3`}>
						<Image
							src="https://imglarger.com/Images/before-after/ai-image-enlarger-1-after-2.jpg"
							alt=""
						/>
					</div>

					<div
						className={`${styles["user-name"]} d-flex flex-column`}
					>
						<span className="text-bold-normal">Gavano</span>
						<span className="text-gray">Admin</span>
					</div>
				</div>
				<div className={`${styles["list-box"]} mt-4 mb-2`}>
					<a
						href="/"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/Dashboard.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Dashboard
						</div>
						<div className="box-rectangle"></div>
					</a>
					<a
						href="/manage-products"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/product.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Products
						</div>
						<div className="box-rectangle"></div>
					</a>
					<a
						href="#"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center ${styles["active"]}`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/Customer.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Customers
						</div>
						<div className="box-rectangle"></div>
					</a>
					<a
						href="/manage-orders"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/order.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Orders
						</div>
						<div className="box-rectangle"></div>
					</a>
					<a
						href="/manage-vouchers"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/voucher.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Vouchers
						</div>
						<div className="box-rectangle"></div>
					</a>
				</div>
				<div className="line"></div>
				<div className={`${"list-box"} mt-2`}>
					<a
						href="/"
						className={`${styles["box-item"]} position-relative p-2 pl-4 d-flex align-items-center`}
					>
						<div className={`${styles["box-icon"]} mr-3`}>
							<svg
								className="mr-2"
								data-src="./assets/svg/setting.svg"
							></svg>
						</div>
						<div
							className={`${styles["box-content"]} text-bold-normal`}
						>
							Settings
						</div>
						<div className="box-rectangle"></div>
					</a>
				</div>
			</nav>
			<div className="container">
				<div className="main pt-4 pb-4">
					<div className="pl-3 pr-3">
						<div className="bg-w border rounded">
							<div className="p-3">
								<div className="header d-flex align-items-center justify-content-between">
									<div className={`${styles["title"]}`}>
										<h5>Customers (3)</h5>
									</div>
									<button
										className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-add"
										data-toggle="modal"
										data-target="#addCustomerModal"
									>
										Add
									</button>
								</div>
								<section className="ftco-section">
									<div className="container">
										<div className="row">
											<div className="col-md-12">
												<div className="table-wrap">
													<table className="table">
														<thead className="thead-primary">
															<tr>
																<th className="text-center">
																	Customer
																	Name
																</th>
																<th className="text-center">
																	Email
																</th>
																<th className="text-center">
																	Phone number
																</th>
																<th className="text-center">
																	Date of
																	birth
																</th>
																<th className="text-center">
																	Sex
																</th>
																<th className="text-center">
																	Membership
																	tiers
																</th>
																<th className="text-center">
																	Actions
																</th>
															</tr>
														</thead>
														<tbody>
															<tr>
																<td className="">
																	Justin
																	Lipshutz
																</td>
																<td className="">
																	<p className="par-line-1 text-center">
																		nhom123@gmail.com
																	</p>
																</td>
																<td className="">
																	<p className="par-line-1 text-center">
																		0912222222
																	</p>
																</td>
																<td className="">
																	<p className="par-line-1 text-center">
																		22/12/2002
																	</p>
																</td>
																<td className="">
																	<p className="par-line-1 text-center">
																		Male
																	</p>
																</td>
																<td
																	className={`${styles["tier"]}`}
																>
																	<div className="d-flex justify-content-center">
																		<div
																			className={`${styles["bronze-tier"]} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
																		>
																			Bronze
																		</div>
																		<div
																			className={`${styles["bronze-tier"]} bg-gray p-1 pr-3 pl-3 rounded text-bold-normal text-center`}
																		>
																			123
																		</div>
																	</div>
																</td>
																<td className="">
																	<div
																		className={`${styles["tier"]} d-flex justify-content-center`}
																	>
																		<button
																			className="btn bg-gray p-1 pr-3 pl-3 rounded text-bold-normal btn-edit"
																			data-toggle="modal"
																			data-target="#editCustomerModal"
																		>
																			Edit
																		</button>
																		<button
																			className="btn bg-gray ml-2 p-1 pr-3 pl-3 rounded text-bold-normal btn-delete"
																			data-toggle="modal"
																			data-target="#deleteCustomerModal"
																		>
																			Delete
																		</button>
																	</div>
																</td>
															</tr>
														</tbody>
													</table>
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* <div className="container">
				<div className="main pt-4 pb-4">
					<div className="pl-3 pr-3">
						<div className="bg-w border rounded">
							<div className="p-3">
								<div className="header d-flex align-items-center justify-content-between">
									<div className={`${styles["title"]}`}>
										<h5>Customer loyalty management program</h5>
									</div>
									
								</div>
								<section className="ftco-section">
									<div className="container">
										<div className="row">
											<div className="col-md-12">
												<div className="table-wrap">
													<table className="table">
													<thead className="thead-primary">
														<tr>
														<th className="text-center">Employee Name</th>
														<th className="text-center">Email</th>
														<th className="text-center">Age</th>
														<th className="text-center">Membership tiers</th>
														</tr>
													</thead>
													<tbody>
														{data && data.listCustomers && Object.keys(data.listCustomers).map((index) => (
														<tr key={index}>
															<td className="">{data.listCustomers[index].HO_TEN}</td>
															<td className="text-center">{data.listCustomers[index].EMAIL}</td>
															<td className="text-center">{data.listCustomers[index].TUOI}</td>
															<td className={`${styles['tier']} d-flex justify-content-center`}>
															<div
																className={`bg-gray p-1 pr-3 pl-3 rounded text-bold-normal ${
																data.listCustomers[index].DIEM_THUONG < 200
																	? styles['bronze-tier']
																	: data.listCustomers[index].DIEM_THUONG < 400
																	? styles['sliver-tier']
																	: styles['gold-tier']
																}`}
															>
																{data.listCustomers[index].DIEM_THUONG < 200
																? 'Bronze'
																: data.listCustomers[index].DIEM_THUONG < 400
																? 'Sliver'
																: 'Gold'}
															</div>
															</td>
														</tr>
														))}
														</tbody>
													</table>

													
												</div>
											</div>
										</div>
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div> */}
			{/* <!-- Modal --> */}
										<div className="container">
									<div className="main pt-4 pb-4">
									<div className="pl-3 pr-3">
										<div className="bg-w border rounded">
										<div className="p-3">
											<div className="header d-flex align-items-center justify-content-between">
											<div className={`${styles["title"]}`}>
												<h5>Customers with Bronze Tier</h5>
											</div>
											</div>
											<section className="ftco-section">
											<div className="container">
												<div className="row">
												<div className="col-md-12">
													<div className="table-wrap">
													<table className="table">
														<thead className="thead-primary">
														<tr>
															<th className="text-center">Customer Name</th>
															<th className="text-center">Email</th>
															<th className="text-center">Age</th>
															<th className="text-center">Membership tiers</th>
														</tr>
														</thead>
														<tbody>
														{bronzeTierCustomers.map((customer, index) => (
															<tr key={index}>
															<td className="">{customer.HO_TEN}</td>
															<td className="text-center">{customer.EMAIL}</td>
															<td className="text-center">{customer.TUOI}</td>
															<td className={`${styles['tier']} d-flex justify-content-center`}>
																<div
																className={`bg-gray p-1 pr-3 pl-3 rounded text-bold-normal ${
																	customer.DIEM_THUONG < 200
																	? styles['bronze-tier']
																	: customer.DIEM_THUONG < 400
																	? styles['silver-tier']
																	: styles['gold-tier']
																}`}
																>
																{customer.DIEM_THUONG < 200
																	? 'Bronze'
																	: customer.DIEM_THUONG < 400
																	? 'Silver'
																	: 'Gold'}
																</div>
															</td>
															</tr>
														))}
														</tbody>
													</table>
													</div>
												</div>
												</div>
											</div>
											</section>
										</div>
										</div>
									</div>
									</div>

									<div className="container">
							<div className="main pt-4 pb-4">
								<div className="pl-3 pr-3">
								<div className="bg-w border rounded">
									<div className="p-3">
									<div className="header d-flex align-items-center justify-content-between">
										<div className={`${styles["title"]}`}>
										<h5>Customers with Silver Tier</h5>
										</div>
									</div>
									<section className="ftco-section">
										<div className="container">
										<div className="row">
											<div className="col-md-12">
											<div className="table-wrap">
												<table className="table">
												<thead className="thead-primary">
													<tr>
													<th className="text-center">Customer Name</th>
													<th className="text-center">Email</th>
													<th className="text-center">Age</th>
													<th className="text-center">Membership tiers</th>
													</tr>
												</thead>
												<tbody>
													{silverTierCustomers.map((customer, index) => (
													<tr key={index}>
														<td className="">{customer.HO_TEN}</td>
														<td className="text-center">{customer.EMAIL}</td>
														<td className="text-center">{customer.TUOI}</td>
														<td className={`${styles['tier']} d-flex justify-content-center`}>
														<div
															className={`bg-gray p-1 pr-3 pl-3 rounded text-bold-normal ${
															styles['silver-tier']
															}`}
														>
															Silver
														</div>
														</td>
													</tr>
													))}
												</tbody>
												</table>
											</div>
											</div>
										</div>
										</div>
									</section>
									</div>
								</div>
								</div>
							</div>
							</div>
							<div className="container">
							<div className="main pt-4 pb-4">
								<div className="pl-3 pr-3">
								<div className="bg-w border rounded">
									<div className="p-3">
									<div className="header d-flex align-items-center justify-content-between">
										<div className={`${styles["title"]}`}>
										<h5>Customers with Gold Tier</h5>
										</div>
									</div>
									<section className="ftco-section">
										<div className="container">
										<div className="row">
											<div className="col-md-12">
											<div className="table-wrap">
												<table className="table">
												<thead className="thead-primary">
													<tr>
													<th className="text-center">Customer Name</th>
													<th className="text-center">Email</th>
													<th className="text-center">Age</th>
													<th className="text-center">Membership tiers</th>
													</tr>
												</thead>
												<tbody>
													{goldTierCustomers.map((customer, index) => (
													<tr key={index}>
														<td className="">{customer.HO_TEN}</td>
														<td className="text-center">{customer.EMAIL}</td>
														<td className="text-center">{customer.TUOI}</td>
														<td className={`${styles['tier']} d-flex justify-content-center`}>
														<div
															className={`bg-gray p-1 pr-3 pl-3 rounded text-bold-normal ${
															styles['gold-tier']
															}`}
														>
															Gold
														</div>
														</td>
													</tr>
													))}
												</tbody>
												</table>
											</div>
											</div>
										</div>
										</div>
									</section>
									</div>
								</div>
								</div>
							</div>
							</div>


      </div>
			<div
				className="modal fade"
				id="addCustomerModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="addCustomerModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="addCustomerModalLabel"
							>
								Edit: Justin Lipshutz
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="modal-text">
								<p className="text-bold-normal">
									Customer Name
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Email</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Phone number</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Date of birth
								</p>
								<input
									type="date"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Sex</p>
								<select className="border text-primary p-1">
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Membership tiers
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Image</p>
								<input
									type="file"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-success">
								Finish
							</button>
						</div>
					</div>
				</div>
			</div>
			<div
				className="modal fade"
				id="editCustomerModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="editCustomerModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="editCustomerModalLabel"
							>
								Edit: Justin Lipshutz
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<div className="modal-text">
								<p className="text-bold-normal">
									Customer Name
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="Justin Lipshutz"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Email</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="nhom123@gmail.com"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Phone number</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="iPhone 12"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Date of birth
								</p>
								<input
									type="date"
									className="border p-1 pr-2 pl-2"
								/>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">Sex</p>
								<select className="border text-primary p-1">
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								</select>
							</div>
							<div className="modal-text">
								<p className="text-bold-normal">
									Membership tiers
								</p>
								<input
									type="text"
									className="border p-1 pr-2 pl-2"
									value="123"
								/>
							</div>
						</div>
						<div className="modal-footer">
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
							<button type="button" className="btn btn-success">
								Finish
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				className="modal fade"
				id="deleteCustomerModal"
				tabIndex="-1"
				role="dialog"
				aria-labelledby="deleteCustomerModalLabel"
				aria-hidden="true"
			>
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5
								className="modal-title"
								id="deleteCustomerModalLabel"
							>
								Delete: Justin Lipshutz
							</h5>
							<button
								type="button"
								className="close"
								data-dismiss="modal"
								aria-label="Close"
							>
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							Are you sure about that?
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-danger">
								Delete
							</button>
							<button
								type="button"
								className="btn btn-secondary"
								data-dismiss="modal"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
export default ManageCustomers;
