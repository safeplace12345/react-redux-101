import React from "react";
import { connect } from "react-redux";
function Posts(props) {
  return <div>
      Posts here
  </div>;
}

const mapStateToProps = (state) => {
  return {
    posts: state,
  };
};
export default connect(mapStateToProps)(Posts);
