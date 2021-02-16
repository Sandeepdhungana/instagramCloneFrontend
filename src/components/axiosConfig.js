export const axiosConfig = {
    baseURL:'https://instagram-by-sandeep.herokuapp.com',
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  };