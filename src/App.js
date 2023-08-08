import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Home from "./containers/Home";
import "./styles/App.css";

function App() {
  const router = createBrowserRouter([
    {
      path: `/`,
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
