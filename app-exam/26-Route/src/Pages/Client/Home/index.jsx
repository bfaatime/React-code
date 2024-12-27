import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Home Page</title>
        <h1>Welcome to Our Store</h1>
      </Helmet>

      <h1>Home Page</h1>
    </>
  );
};

export default Home;
