import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layout/Layout";
import { lazy } from "react";

const Product = lazy(() => import("../pages/products/Product"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const NewArrival = lazy(() => import("../pages/NewArrival"));
const Contact = lazy(() => import("../pages/Contact"));
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="product" element={<Product />} />
        <Route path="about" element={<About />} />
        <Route path="new-arrival" element={<NewArrival />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
