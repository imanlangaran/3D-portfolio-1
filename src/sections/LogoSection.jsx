import React from "react";
import { logoIconsList } from "../constants";

const LogoSection = () => {
  const baseUrl = import.meta.env.BASE_URL; // Access the base URL

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div>
          <div className="marquee-box md:gap-12 gap-5">
            {logoIconsList.map((icon) => (
              <div
                key={icon.imgPath}
                className="flex-none flex-center marquee-item"
              >
                <img src={`${baseUrl}${icon.imgPath}`} alt={icon.imgPath} />
              </div>
            ))}
            {logoIconsList.map((icon) => (
              <div
                key={icon.imgPath}
                className="flex-none flex-center marquee-item"
              >
                <img src={`${baseUrl}${icon.imgPath}`} alt={icon.imgPath} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
