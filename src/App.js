import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Default from "./containers/Default";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import LoginCheck from "./components/LoginCheck";
import Home from "./containers/Home";
import MyList from "./containers/MyList";
import Movies from "./containers/Movies";
import TvShows from "./containers/TvShows";
import Webseries from "./containers/Webseries";
import Notifications from "./containers/Notifications";
import ManageProfile from "./containers/ManageProfile";
import TransferProfile from "./containers/TransferProfile";
import SubscriptionStep1 from "./containers/SubscriptionStep1";
import SubscriptionStep2 from "./containers/SubscriptionStep2";
import Payment from "./containers/Payment";
import HelpCentre from "./containers/HelpCentre";
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
      element: (
        <LoginCheck>
          <Home />
        </LoginCheck>
      ),
    },
    {
      path: `/notifications`,
      element: (
        <LoginCheck>
          <Notifications />
        </LoginCheck>
      ),
    },
    {
      path: `/manage-profile`,
      element: (
        <LoginCheck>
          <ManageProfile />
        </LoginCheck>
      ),
    },
    {
      path: `/transfer-profile`,
      element: (
        <LoginCheck>
          <TransferProfile />
        </LoginCheck>
      ),
    },
    {
      path: `/help-centre`,
      element: (
        <LoginCheck>
          <HelpCentre />
        </LoginCheck>
      ),
    },
    {
      path: `/subscription-step1`,
      element: (
        <LoginCheck>
          <SubscriptionStep1 />
        </LoginCheck>
      ),
    },
    {
      path: `/subscription-step2`,
      element: (
        <LoginCheck>
          <SubscriptionStep2 />
        </LoginCheck>
      ),
    },
    {
      path: `/payment`,
      element: (
        <LoginCheck>
          <Payment />
        </LoginCheck>
      ),
    },
    {
      path: `/my-list`,
      element: (
        <LoginCheck>
          <MyList />
        </LoginCheck>
      ),
    },
    {
      path: `/movies`,
      element: (
        <LoginCheck>
          <Movies />
        </LoginCheck>
      ),
    },
    {
      path: `/tv-shows`,
      element: (
        <LoginCheck>
          <TvShows />
        </LoginCheck>
      ),
    },
    {
      path: `/web-series`,
      element: (
        <LoginCheck>
          <Webseries />
        </LoginCheck>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
