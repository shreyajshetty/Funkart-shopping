import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header color="blue" />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
