export const initialState = {
  posts: [],
  myPost:[]
};

// selector

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.posts
      };
    case "MY_POST":
       return {
        ...state,
        myPost: action.myposts
       }
    default:
      return state;
  }
};

export default reducer;
