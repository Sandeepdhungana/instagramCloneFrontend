export const initialState = {
  posts: [],
};

// selector

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.posts
      };
    default:
      return state;
  }
};

export default reducer;
