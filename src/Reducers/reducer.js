export const initialState = {
  posts: [],
  myPost: [],
  allusers: [],
  userinfo: null,
  userpost: null,
};

// selector

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        posts: action.posts,
      };
    case "MY_POST":
      return {
        ...state,
        myPost: action.myposts,
      };
    case "ALL_USERS":
      return {
        ...state,
        allusers: action.allusers,
      };
    case "USER_INFO":
      return {
        userinfo: action.userinfo,
      };
    case "USER_POST":
      return {
        userpost: action.userpost,
      };
    default:
      return state;
  }
};

export default reducer;
