import config from '~/config/';

// Components
import CartPage from '~/pages/Cart';
import CheckoutPage from '~/pages/Checkout';
import DashboardPage from '~/pages/Dashboard';
import FavoritePage from '~/pages/Favorite';
import HomePage from '~/pages/Home';
import HotOffersPage from '~/pages/HotOffers';
import LoginPage from '~/pages/Login';
import ManageCustomersPage from '~/pages/ManageCustomers';
import ManageOrdersPage from '~/pages/ManageOrders';
import ManageProductsPage from '~/pages/ManageProducts';
import ManageVouchersPage from '~/pages/ManageVouchers';
import OrdersHistoryPage from '~/pages/OrdersHistory';
import ProfileSettingPage from '~/pages/ProfileSetting';
import ProductPage from '~/pages/Product';
import ProductsPage from '~/pages/Products';
import RegisterPage from '~/pages/Register';
import LoyaltyPage from '~/pages/Loyalty';
import RefundOrderPage from '~/pages/RefundOrder';
import ConfirmPayPalPage from '~/pages/ConfirmPaypal';
import CancelPayPalPage from '~/pages/CancelPaypal';
import OrderDetailPage from '~/pages/OrderDetail';
import ReturnVnPayPage from '~/pages/ReturnVnPay';
import PersonalInfoPage from '~/pages/PersonalInfo';

//Layouts
import { AdminLayout, PageNoSearchLayout } from '~/layouts/layout';
import ViewRefundRequestPage from '~/pages/ViewRefundRequest';

const routes = {
  publicRoutes: {
    login: [
      { path: config.routes.Login, components: LoginPage, layout: PageNoSearchLayout },
      { path: config.routes.Register, components: RegisterPage, layout: PageNoSearchLayout },
    ],
    guest: [
      { path: config.routes.home, components: HomePage },
      { path: config.routes.Products, components: ProductsPage },
      { path: config.routes.Product, components: ProductPage },
      { path: config.routes.Login, components: LoginPage, layout: PageNoSearchLayout },
      { path: config.routes.Register, components: RegisterPage, layout: PageNoSearchLayout },
      { path: config.routes.HotOffers, components: HotOffersPage, layout: PageNoSearchLayout },
    ],
    user: [
      { path: config.routes.Checkout, components: CheckoutPage },
      { path: config.routes.MyCart, components: CartPage, layout: PageNoSearchLayout },
      { path: config.routes.Favorite, components: FavoritePage, layout: PageNoSearchLayout },
      { path: config.routes.OrdersHistory, components: OrdersHistoryPage, layout: PageNoSearchLayout },
      { path: config.routes.ProfileSetting, components: ProfileSettingPage, layout: PageNoSearchLayout },
      { path: config.routes.Loyalty, components: LoyaltyPage, layout: PageNoSearchLayout },
      { path: config.routes.RefundOrder, components: RefundOrderPage, layout: PageNoSearchLayout },
      { path: config.routes.ViewRefundRequest, components: ViewRefundRequestPage, layout: PageNoSearchLayout },
      { path: config.routes.ConfirmPaypal, components: ConfirmPayPalPage },
      { path: config.routes.CancelPaypal, components: CancelPayPalPage },
      { path: config.routes.OrderDetail, components: OrderDetailPage },
      { path: config.routes.ReturnVnPay, components: ReturnVnPayPage },
      { path: config.routes.info, components: PersonalInfoPage },
    ],
  },
  privateRoutes: [
    { path: config.routes.Dashboard, components: DashboardPage, layout: AdminLayout },
    { path: config.routes.Dashboard2, components: DashboardPage, layout: AdminLayout },

    { path: config.routes.ManageProducts, components: ManageProductsPage, layout: AdminLayout },
    { path: config.routes.ManageCustomers, components: ManageCustomersPage, layout: AdminLayout },
    { path: config.routes.ManageOrders, components: ManageOrdersPage, layout: AdminLayout },
    { path: config.routes.ManageVouchers, components: ManageVouchersPage, layout: AdminLayout },
  ],
};

export { routes };
