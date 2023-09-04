import { createBrowserRouter } from "react-router-dom";
import Root from "app";
import { ErrorPage, MainPage, ApiPage } from "pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/api",
        element: <ApiPage />,
        children: [
          {
            path: "api/news",
            element: <div>news</div>,
            index: true,
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
    ],
  },
]);
