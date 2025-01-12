import React from "react";
import { ShowcaseWrapper } from "./Showcase.css";
import IMAGES from "../../assets/images-export";

const Showcase = ({ children, height, bg_image, justify, align }) => {
  return (
    <ShowcaseWrapper
      className={`text-white d-flex flex-column justify-content-${
        justify || "center"
      } align-items-${align}`}
      bg_image={
        bg_image || IMAGES.image1
      }
      height={height || "90vh"}
    >
      {children}
    </ShowcaseWrapper>
  );
};

export default Showcase;
