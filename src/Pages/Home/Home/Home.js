import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Catagories from "../Catagories/Catagories";
import ContactUs from "../ContactUs/ContactUs";
import JwelleryPrice from "../JwelleryPrice/JwelleryPrice";
import Owners from "../Owners/Owners";

const Home = () => {
  return (
    <div>
      <JwelleryPrice></JwelleryPrice>
      <Banner></Banner>
      <AboutUs></AboutUs>
      {/* <AllProducts></AllProducts> */}
      <Catagories></Catagories>
      <Owners></Owners>
      <ContactUs></ContactUs>
      {/* <ProductDetail></ProductDetail> */}
      {/* <ProductShow></ProductShow> */}
    </div>
  );
};

export default Home;
