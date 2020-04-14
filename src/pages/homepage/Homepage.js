import React from "react";
import HpCarousel from "./carousel/Carousel";
import Dergiler from "./dergiler/Dergiler";
import Footer from "../../components/common/footer/Footer";

function Homepage() {
  return (
    <>
      <HpCarousel></HpCarousel>
      <Dergiler></Dergiler>
    </>
  );
}

export default Homepage;
