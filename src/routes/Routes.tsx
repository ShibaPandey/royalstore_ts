import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "../layout/Layout";
import { lazy } from "react";
import UnAuthLayout from "../layout/UnAuthLayout";
import AuthLauout from "../layout/AuthLauout";

const Product = lazy(() => import("../pages/products/Product"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const NewArrival = lazy(() => import("../pages/NewArrival"));
const Contact = lazy(() => import("../pages/Contact"));
const Login = lazy(() => import("../pages/auth/Login"));
const Register = lazy(() => import("../pages/auth/Register"));
const Routes = ({ user }: { user: boolean }) => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout user={user} />}>
        <Route element={<UnAuthLayout user={user} />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route element={<AuthLauout user={user} />}>
          <Route index element={<Home />} />
          <Route path="product" element={<Product />} />
          <Route path="about" element={<About />} />
          <Route path="new-arrival" element={<NewArrival />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default Routes;
