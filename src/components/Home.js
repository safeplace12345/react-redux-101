import React from "react";
import { connect } from "react-redux";
import{ NavLink} from 'react-router-dom'
function Home(props) {
  return (
    <>
      {props.posts ? (
        props.posts.map(({ userId, id, title,body }) => {
          return (
            <div className="card" key={id}>
              <img
                style={{
                  width: "100%",
                  height: "50%",
                  position: "absolute",
                  bottom: "0",
                  opacity: "0.2",
                  zIndex: '0'
                }}
                src="https://images.unsplash.com/photo-1616852048024-432d974cb394?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=336&q=80"
                alt="Card image cap"
              />
              <div class="card-body">
                <NavLink to={"/" + id}>
                  <h5 className="card-title">{title}</h5>
                </NavLink>
                <p className="card-text">{body}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
              <div className="card-footer">User Id : {userId}</div>
            </div>
          );  
        })
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
