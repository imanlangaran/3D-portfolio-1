import React from "react";

const ShowCaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerfull, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, & TailwindCS for a fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCaseSection;
