import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
function Home(props) {
  const style = {
    backgroundImage:
      "url(" +
      "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      {props.posts ? (
        <div className="d-flex justify-content-center align-items-center"
          style={{
            width: "100vw",
            height: "70vh",
            backgroundImage:
              "url(" +
              "https://images.unsplash.com/photo-1551190942-cc7bec3f72b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="btn btn-lg btn-outline-dark px-5 ">
            <NavLink to="./Posts" className="nav-link">
             Go To Posts
            </NavLink>
          </button>
        </div>
      ) : (
        <h4>No Post yet</h4>
      )}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(Home);
