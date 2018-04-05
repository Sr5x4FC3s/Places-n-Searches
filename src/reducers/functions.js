import Redux from 'redux';

export let result = (state = [], action) => {
  console.log(action);
  switch (action.type) {
    case `FETCH_SUCCESSFUL`:
      return action.items;
    default:
      return state;
  }
}

export let term = (state = '', action) => {
  switch (action.type) {
    case `SEARCH_TERM`:
      return action.query;
    default: 
      return state;
  }
}