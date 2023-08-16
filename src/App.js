import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Default from "./containers/Default";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import MyList from "./containers/MyList";
import Movies from "./containers/Movies";
import TvShows from "./containers/TvShows";
import Webseries from "./containers/Webseries";
import Notifications from "./containers/Notifications";
import ManageProfile from "./containers/ManageProfile";
import Account from "./containers/Account";
import TransferProfile from "./containers/TransferProfile";
import SubscriptionStep1 from "./containers/SubscriptionStep1";
import SubscriptionStep2 from "./containers/SubscriptionStep2";
import Payment from "./containers/Payment";
import HelpCentre from "./containers/HelpCentre";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./AuthContext";
import "./styles/App.css";
import { useEffect } from "react";

function App() {
  const { dispatch } = useAuth();

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      dispatch({ type: "LOGIN", payload: storedToken });
    }
  }, [dispatch]);

  const router = createBrowserRouter([
    {
      path: `/`,
      element: <Default />,
    },
    {
      path: `/signin`,
      element: <Signin />,
    },
    {
      path: `/signup`,
      element: <Signup />,
    },
    {
      path: `/home`,
      element: <ProtectedRoute element={<Home />} />,
    },
    {
      path: `/notifications`,
      element: <ProtectedRoute element={<Notifications />} />,
    },
    {
      path: `/manage-profile`,
      element: <ProtectedRoute element={<ManageProfile />} />,
    },
    {
      path: `/transfer-profile`,
      element: <ProtectedRoute element={<TransferProfile />} />,
    },
    {
      path: `/account`,
      element: <ProtectedRoute element={<Account />} />,
    },
    {
      path: `/help-centre`,
      element: <ProtectedRoute element={<HelpCentre />} />,
    },
    {
      path: `/subscription-step1`,
      element: <ProtectedRoute element={<SubscriptionStep1 />} />,
    },
    {
      path: `/subscription-step2`,
      element: <ProtectedRoute element={<SubscriptionStep2 />} />,
    },
    {
      path: `/payment`,
      element: <ProtectedRoute element={<Payment />} />,
    },
    {
      path: `/my-list`,
      element: <ProtectedRoute element={<MyList />} />,
    },
    {
      path: `/movies`,
      element: <ProtectedRoute element={<Movies />} />,
    },
    {
      path: `/tv-shows`,
      element: <ProtectedRoute element={<TvShows />} />,
    },
    {
      path: `/web-series`,
      element: <ProtectedRoute element={<Webseries />} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
