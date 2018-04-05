const axios = require('axios');

const URL = `http://localhost:`;
const PORT = `8081`;

export let result = (items) => {
  return {
    type: `FETCH_SUCCESSFUL`,
    items: items
  };
}

console.log(result, result());

export let term  = (query) => {
  return {
    type: `SEARCH_TERM`,
    query: query
  };
}

//define fetch call to the server 
export let fetch = term => {
  return (dispatch) => {
    axios.get(`${URL}${PORT}/search/${term}`)
      .then((response) => {
        console.log(response);
        return response;
      })
      .then((items) => {
        dispatch(result(items));
      })
      .catch((error) => {
        console.log(error);
      })
  };
};
