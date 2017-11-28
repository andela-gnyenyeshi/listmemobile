/* eslint-disable no-undef */
import pressReducer from '../../reducer/index';

const initialState = {
  updated: null,
  deleted: null,
  fetched: null,
  error: null,
  request: null,
};

let action;

describe('Press Reducer Test', () => {
  it('should have initial state', () => {
    expect(pressReducer()).toEqual(initialState);
  });
  it('should have no effect on state', () => {
    action = { type: 'TEST' };
    expect(pressReducer(initialState, action)).toEqual(initialState);
  });
  it('should store fetched articles', () => {
    const articles = [{ title: 'Kidoti' }];
    action = { type: 'FETCH', payload: articles };
    expect(pressReducer(initialState, action).fetched).toEqual(articles);
  });
});
