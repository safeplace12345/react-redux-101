import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">
        Company Logo
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">
              Home<span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="./Posts" className="nav-link">
              Posts
            </Link>
          </li>
          <li className="nav-item">
            <h1 className="badge badge-secondary ml-4">
              {props.posts.length} posts
            </h1>
          </li>
        </ul>
      </div>
    </nav>
  );
}

    // <nav className="navbar navbar-expand-lg navbar-md navbar-light bg-light">
    //   <a className="navbar-brand" href="#">
    //     Logo
    //   </a>
    //   <button>{props.posts.length} posts</button>
    // </nav>
const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(NavBar);
