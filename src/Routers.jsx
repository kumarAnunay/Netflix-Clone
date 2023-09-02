import { createBrowserRouter } from "react-router-dom";
import Default from "./containers/Default/Default";
import Signin from "./containers/Login/Signin";
import Signup from "./containers/Login/Signup";
import Home from "./containers/Home/Home";
import MyList from "./containers/MyList/MyList";
import Movies from "./containers/Movies";
import TvShows from "./containers/TvShows";
import Webseries from "./containers/Webseries";
import Notifications from "./containers/Notifications";
import ManageProfile from "./containers/ManageProfile/ManageProfile";
import Account from "./containers/Account/Account";
import UpdatePassword from "./containers/UpdatePassword/UpdatePassword";
import TransferProfile from "./containers/TransferProfile";
import SubscriptionStep1 from "./containers/Subscription/SubscriptionStep1";
import SubscriptionStep2 from "./containers/Subscription/SubscriptionStep2";
import Payment from "./containers/Subscription/Payment";
import HelpCentre from "./containers/HelpCenter/HelpCentre";
import ProtectedRoute from "./components/ProtectedRoute";
import MoviePlay from "./containers/MoviePlay/MoviePlay";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/notifications",
    element: <ProtectedRoute element={<Notifications />} />,
  },
  {
    path: "/manage-profile",
    element: <ProtectedRoute element={<ManageProfile />} />,
  },
  {
    path: "/transfer-profile",
    element: <ProtectedRoute element={<TransferProfile />} />,
  },
  {
    path: "/account",
    element: <ProtectedRoute element={<Account />} />,
  },
  {
    path: "/update-password",
    element: <ProtectedRoute element={<UpdatePassword />} />,
  },
  {
    path: "/help-centre",
    element: <ProtectedRoute element={<HelpCentre />} />,
  },
  {
    path: "/subscription-step1",
    element: <ProtectedRoute element={<SubscriptionStep1 />} />,
  },
  {
    path: "/subscription-step2",
    element: <ProtectedRoute element={<SubscriptionStep2 />} />,
  },
  {
    path: "/payment",
    element: <ProtectedRoute element={<Payment />} />,
  },
  {
    path: "/my-list",
    element: <ProtectedRoute element={<MyList />} />,
  },
  {
    path: "/movies",
    element: <ProtectedRoute element={<Movies />} />,
  },
  {
    path: "/tv-shows",
    element: <ProtectedRoute element={<TvShows />} />,
  },
  {
    path: "/web-series",
    element: <ProtectedRoute element={<Webseries />} />,
  },
  {
    path: "/playMovie",
    element: <ProtectedRoute element={<MoviePlay />} />,
  },
]);
