/* eslint-disable no-undef */
import React from 'react';
// import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import configureStore from 'redux-mock-store';
import HomeContainer from '../../container/HomeContainer';

const mockStore = configureStore();

describe('Home Container', () => {
  let wrapper;
  let store;

  beforeEach(() => {
    store = mockStore();
    store.dispatch = jest.fn();
    const renderer = new ShallowRenderer();
    renderer.render(<HomeContainer store={store} />);
    wrapper = renderer.getRenderOutput();

    // console.log('WRAPPER', wrapper.props);
  });
  it('maps state and dispatch', () => {
    expect(wrapper.props.state).toEqual({});
    wrapper.props.getData(76);
    // console.log('Callls', store.dispatch.mock.calls.length);
    expect(store.dispatch.mock.calls.length).toBe(1);
  });
});
