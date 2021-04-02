const comments = [];
function commentsReducer(state = comments, actions) {
  const payload = actions.payload;
  switch (actions.type) {
    case "deleteComment":
      // state.filter(({ id }) => id === payload.id);
      console.log("Delete comment now", payload);
      return state;
    case "addComment":
      return [...state, { id: payload.id, comments: [payload.description] }];
    default:
      return state;
  }
}
export default commentsReducer;