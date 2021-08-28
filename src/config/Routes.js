import Login from "../pages/Login";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Account from "../pages/Account";
import Category from "../pages/Category";

const routes = [
  {
    path: "/",
    exact: true,
    component: Login,
  },
  {
    path: "/login",
    component: Login,
  },
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
