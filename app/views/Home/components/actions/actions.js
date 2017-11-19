export function setStart() {
  return {
    type: 'START',
  };
}

export function thunkAction() {
  return dispatch => dispatch(setStart());
}
