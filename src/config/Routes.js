import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Account from "../pages/Account";
import Category from "../pages/Category";

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
