import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";
import { router } from "./containers/Routers";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
