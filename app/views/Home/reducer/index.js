const initialState = {
  updated: null,
  deleted: null,
  fetched: null,
  error: null,
  request: null,
};

const pressReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'FETCH':
      return { ...state, fetched: action.payload };
    case 'UPDATE':
      return { ...state, updated: action.payload };
    case 'DELETE':
      return { ...state, deleted: action.payload };
    case 'ERROR':
      return { ...state, error: action.payload };
    case 'REQUEST':
      return { ...state, request: true };
    default:
      return state;
  }
};

export default pressReducer;
