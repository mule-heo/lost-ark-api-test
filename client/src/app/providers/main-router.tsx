import { createBrowserRouter } from "react-router-dom";
import Root from "app/index";
import ErrorPage from "pages/error-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "api/news",
        element: <div>news</div>,
      },
      {
        path: "api/characters",
        element: <div>characters</div>,
      },
      {
        path: "api/armories",
        element: <div>armories</div>,
      },
      {
        path: "api/auctions",
        element: <div>auctions</div>,
      },
      {
        path: "api/guilds",
        element: <div>guilds</div>,
      },
      {
        path: "api/markets",
        element: <div>markets</div>,
      },
      {
        path: "api/gamecontents",
        element: <div>gamecontents</div>,
      },
    ],
  },
]);
