import { Outlet } from "react-router-dom";
import Header from "../../../Layout/Client/Header/index";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClientLayout;