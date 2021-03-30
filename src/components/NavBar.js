import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Logo
      </a>
      <NavLink to="/">Home</NavLink>
      <NavLink to="./Posts">Posts</NavLink>
      <button>{props.posts.length} posts</button>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(NavBar);
