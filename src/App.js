import { RouterProvider } from "react-router-dom";
import "./styles/App.css";
import { router } from "./Routers";
import { SearchContextProvider } from "./components/SearchContextProvider";

function App() {
  return (
    <SearchContextProvider>
      <RouterProvider router={router} />
    </SearchContextProvider>
  );
}

export default App;
