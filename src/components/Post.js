import React from "react";
import { connect } from "react-redux";
function Post(props) {
  const idParam = props.match.params.name;
  const post = props.posts.find((post) => post.id == idParam);
  const { title, body, userId } = post;
  return (
    <div>
      <div className="container">
        <h2 className="text-center text-danger">{title}</h2>
        <h6>{body}</h6>
        <small className="text-center text-mute">Created by : {userId}</small>
        <button
          className="ml-5 mt-4 btn btn-outline-danger"
          onClick={() => {
            props.deletePost(idParam);
          }}
        >
          Delete Post
        </button>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch({ type: "deletePost", payload: id });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
