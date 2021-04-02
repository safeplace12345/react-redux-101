const addComment = "addComment";
const deletePost = "deletePost";

export const _addComments = (id ,comment) => {
  return {
    type: addComment,
    payload: {
      id,
      description: comment,
    },
  };
};
export const _deletePost = (id) => {
  return { type: deletePost, payload: id };
};

