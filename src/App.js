import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Default from "./containers/Default";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
