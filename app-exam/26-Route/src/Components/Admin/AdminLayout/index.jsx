import { Outlet } from "react-router-dom";
import AdminHeader from "../../../Layout/Admin/Header";

const AdminLayout = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AdminLayout;
