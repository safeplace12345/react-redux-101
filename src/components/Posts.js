import React from "react";
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
function Posts(props) {
  const users = [] 
  props.users.data.forEach(element => {
    users.push(element.name)
  });
  return (
    <div>
      <>
        {props.posts ? (
          props.posts.map(({ userId, id, title, body }) => {
            return (
              <div className="card" key={id}>
                <img
                  style={{
                    width: "100%",
                    height: "50%",
                    position: "absolute",
                    bottom: "0",
                    opacity: "0.2",
                    zIndex: "0",
                  }}
                  src="https://images.unsplash.com/photo-1616852048024-432d974cb394?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=336&q=80"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <NavLink to={"/" + id}>
                    <h5 className="card-title">{title}</h5>
                  </NavLink>
                  <p className="card-text">{body}</p>
                  <NavLink to={"/" + id} className="btn btn-primary">
                    Go to this Post
                  </NavLink>
                </div>
                <div className="card-footer">Authored by : {users[id] ? users[id] : "Anonymous"}</div>
              </div>
            );
          })
        ) : (
          <h4>No Post yet</h4>
        )}
      </>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users : state.user
  };
};
export default connect(mapStateToProps)(Posts);
