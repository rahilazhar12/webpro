// router.js
import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Loader from "../../Components/loader/Loader"; // Adjust path as needed

// Lazy load the components
const App = React.lazy(() => import("../../App"));
const Home = React.lazy(() => import("../../Pages/home/Home"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
