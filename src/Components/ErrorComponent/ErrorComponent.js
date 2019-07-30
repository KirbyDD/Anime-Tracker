import React from "react";
import { Link } from "react-router-dom";
import "./ErrorComponent.scss";

export const ErrorComponent = () => {
  return (
    <section className="error-section">
      <h2 className="error-msg">
        404 Error. The page you are looking for does not exist. Please click the
        button below to go back to the Home Page
      </h2>
      <Link to="/" className="home-link">
        Naruto Run Home
      </Link>
    </section>
  );
};

export default ErrorComponent;
