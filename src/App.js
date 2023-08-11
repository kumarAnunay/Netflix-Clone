import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Default from "./containers/Default";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import MyList from "./containers/MyList";
import Movies from "./containers/Movies";
import TvShows from "./containers/TvShows";
import Notifications from "./components/Notifications";
import SubscriptionStep1 from "./components/SubscriptionStep1";
import SubscriptionStep2 from "./components/SubscriptionStep2";
import Payment from "./components/Payment";
import HelpCentre from "./components/HelpCentre";
import "./styles/App.css";

function App() {
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
      element: <Home />,
    },
    {
      path: `/notifications`,
      element: <Notifications />,
    },
    {
      path: `/help-centre`,
      element: <HelpCentre />,
    },
    {
      path: `/subscription-step1`,
      element: <SubscriptionStep1 />,
    },
    {
      path: `/subscription-step2`,
      element: <SubscriptionStep2 />,
    },
    {
      path: `/payment`,
      element: <Payment />,
    },
    {
      path: `/my-list`,
      element: <MyList />,
    },
    {
      path: `/movies`,
      element: <Movies />,
    },
    {
      path: `/tv-shows`,
      element: <TvShows />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
