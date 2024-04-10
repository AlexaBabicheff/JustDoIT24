import React from "react";
import classes from "./ErrorPage.module.css";
import error from "./404.png";
import { Link } from "react-router-dom";

const ErrorPage = () => (
  <div className={classes.ErrorPage}>
    <div className={classes.ErrorPageHeader}>
      <img src={error} alt="problem" />
    </div>
    <div className={classes.errorTitel}>
      <p>Page Not Found</p>
    </div>
    <div className={classes.errorText}>
      <p>
        We’re sorry, the page you requested could not be found. Please go back
        to the homepage.
      </p>
    </div>
      <Link to="/">
        <button>
          <p>Go Home</p>
        </button>
      </Link>
    </div>
);

export default ErrorPage;
