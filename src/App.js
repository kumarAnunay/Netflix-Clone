import { RouterProvider } from "react-router-dom";
import "./styles/App.css";
import { router } from "./Routers";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
