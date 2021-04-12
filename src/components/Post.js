import React from "react";
import { connect } from "react-redux";
import {_deletePost , _addComments } from '../services/ActionTypes'
function Post(props) {
  const idParam = props.match.params.name;
  const post = props.posts.find((post) => post.id == idParam);
  const { title, body, userId } = post;
  const delete_post = () => props.deletePost(idParam);
  const add_comment = (e) => {
     e.preventDefault();
   return props.addComment(idParam, e.target["comment"].value);
  };


  const comments = props.comments ? props.comments.filter(({ postID }) => postID === idParam) : [];
  const commentStyle = {
    backgroundImage:
      "url(" +
      "https://images.unsplash.com/photo-1572231754710-4bed19649091?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" +
      ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <div className="container">
        <h2 className="text-center text-danger">{title}</h2>
        <h6>{body}</h6>
        <small className="text-center text-mute">Created by : {userId}</small>
        <button
          className="ml-5 mt-4 btn btn-outline-danger"
          onClick={delete_post}
        >
          Delete Post
        </button>
        <button
          type="button"
          data-toggle="modal"
          data-target="#comment-modal"
          className="ml-5 mt-4 btn btn-outline-success"
        >
          Add Comment
        </button>
      </div>
      {/* comments section */}
      {comments ? (
        <div>
          <div className="media rounded col-6 mx-auto my-2" style={commentStyle}>
            <div className="media-body">
              <h3 className="badge badge-secondary"> From : {comments.id}</h3>
              {comments.map((element) => {
                return <h4 key={element.id}> {element.comment}</h4>;
              })}
            </div>
          </div>
        </div>
      ) : (
        <h3 className="text-center text-warning"> No comments yet :'('</h3>
      )}
      {/* comment modal */}
      <div
        className="modal fade"
        id="comment-modal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Add comment .....
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form
                onSubmit={(e) => {
                  add_comment(e);
                }}
              >
                <input
                  type="text"
                  className="form-control form-control-lg "
                  name="comment"
                ></input>
                <button type="submit" className="btn btn-primary mt-3">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    comments : state.comments
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => {
      dispatch(_deletePost(id));
    },
    addComment: (id, comment) => {
      dispatch(_addComments(id,comment));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Post);
