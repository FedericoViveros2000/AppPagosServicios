import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import ErrorPage from "../components/ErrorPage.jsx";
import Home from "../components/Home.jsx";
import FormQueryDebt from "../components/FormQueryDebt.jsx";
import PayDebt from "../components/PayDebt.jsx";
import FinishPay from "../components/FinishPay.jsx";
import FormRegister from "../components/FormRegister.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Register",
    element: <FormRegister />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pay/:service",
    element: <FormQueryDebt />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/pay/:service/:id",
    element: <PayDebt />,
    errorElement: <ErrorPage />,
  },
  {
    path: "pay/:id/finished",
    element: <FinishPay />,
    errorElement: <ErrorPage />,
  }
]);

export { router };
