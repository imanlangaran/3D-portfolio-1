import React from "react";

const Button = ({ className, id = "", text }) => {
  const baseUrl = import.meta.env.BASE_URL; // Access the base URL

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        const target = document.getElementById("counter");
        if (target && id) {
          //   target.scrollIntoView({ behavior: "smooth" });
          const offset = window.innerHeight * 0.15;
          const top =
            target.getBoundingClientRect().top + window.scrollY - offset;

          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
      href={`#${id}`}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src={`${baseUrl}images/arrow-down.svg`} alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
