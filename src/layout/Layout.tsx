import { Outlet } from "react-router-dom";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";

const Layout = ({ user }: { user: boolean }) => {
  return (
    <>
      <Navbar user={user} />

      <div className="mt-2 mx-12">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
