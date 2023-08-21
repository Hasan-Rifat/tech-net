import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import App from "../App";
import Login from "../page/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <div>404</div>,
  },
]);

export default router;
