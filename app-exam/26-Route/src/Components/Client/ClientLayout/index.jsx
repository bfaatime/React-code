import { Outlet } from "react-router-dom";
import Header from "../ClientLayout";

const ClientLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default ClientLayout;