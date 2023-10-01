import { createBrowserRouter, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import CartPage from "../pages/CartPage/CartPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/view-cart",
    element: <CartPage />,
  },
]);

export default routes;
