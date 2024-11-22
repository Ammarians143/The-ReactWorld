import App from "./App";
import { createRoot } from "react-dom/client";
import Home from './Components/Home'
import CountryDetail from "./Components/CountryDetail";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<Error />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/:country",
        element: <CountryDetail />
      },
    ],
  },
]);

const root = createRoot(document.querySelector('.root'))

root.render(<RouterProvider router={router} /> )