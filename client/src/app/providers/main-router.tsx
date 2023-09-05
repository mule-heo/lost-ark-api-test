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
      },
    ],
  },
]);
