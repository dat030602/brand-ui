import config from "~/config/";
import CartPage from "~/pages/Cart";
import CheckoutPage from "~/pages/Checkout";
import DashboardPage from "~/pages/Dashboard";
import FavoritePage from "~/pages/Favorite";

//Layout

import HomePage from "~/pages/Home";
import HotOffersPage from "~/pages/HotOffers";
import LoginPage from "~/pages/Login";
import ManageCustomersPage from "~/pages/ManageCustomers";
import ManageOrdersPage from "~/pages/ManageOrders";
import ManageProductsPage from "~/pages/ManageProducts";
import ManageVouchersPage from "~/pages/ManageVouchers";
import OrdersHistoryPage from "~/pages/OrdersHistory";
import PersonalEditPage from "~/pages/PersonalEdit";
import ProductPage from "~/pages/Product";
import ProductsPage from "~/pages/Products";
import RegisterPage from "~/pages/Register";

const publicRoutes = [
	{ path: config.routes.home, components: HomePage },
	{ path: config.routes.Products, components: ProductsPage },
	{ path: config.routes.Product, components: ProductPage },
	{ path: config.routes.Checkout, components: CheckoutPage },
	{ path: config.routes.Login, components: LoginPage },
	{ path: config.routes.Register, components: RegisterPage },
	{ path: config.routes.MyCart, components: CartPage },
	{ path: config.routes.Favorite, components: FavoritePage },
	{ path: config.routes.OrdersHistory, components: OrdersHistoryPage },
	{ path: config.routes.PersonalEdit, components: PersonalEditPage },
	{ path: config.routes.HotOffers, components: HotOffersPage },
	{ path: config.routes.Dashboard, components: DashboardPage },
	{ path: config.routes.ManageProducts, components: ManageProductsPage },
	{ path: config.routes.ManageCustomers, components: ManageCustomersPage },
	{ path: config.routes.ManageOrders, components: ManageOrdersPage },
	{ path: config.routes.ManageVouchers, components: ManageVouchersPage },
];
const privateRoutes = [];

export { publicRoutes, privateRoutes };
