import Home from "../pages/home/Home";
import Category from "../pages/category/Category";
import Cart from "../pages/cart/Cart";
import Account from "../pages/account/Account";

const routes = [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "/category",
    component: Category,
  },
  {
    path: "/cart",
    component: Cart,
  },

  {
    path: "/account",
    component: Account,
  },
];

export default routes;
