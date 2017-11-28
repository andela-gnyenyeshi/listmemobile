import apiClient from 'api/apiClient';

const onError = error => ({ type: 'ERROR', error });
const updateDataDispatch = payload => ({ type: 'UPDATE', payload });

const updateData = () => async (dispatch) => {
  const dataUpdate = { title: 'Title title', body: 'Gerty' };
  try {
    const data = await apiClient('put', '/posts/1', {
      data: dataUpdate,
      params: { source: 'techcrunch', apiKey: '2361976c6a3d4e20abd18ed7acfbc7f3' },
    });

    dispatch(updateDataDispatch(data));
  } catch (error) {
    dispatch(onError(error));
  }
};

const getDataDispatch = payload => ({ type: 'FETCH', payload });

const getData = () => async (dispatch) => {
  try {
    const dataTwo = await apiClient('get', '/posts/1');
    dispatch(getDataDispatch(dataTwo));
  } catch (error) {
    dispatch(onError(error));
  }
};

const deleteDataDispatch = payload => ({ type: 'DELETE', payload });

const deleteData = () => async (dispatch) => {
  try {
    const dataThree = await apiClient('delete', '/posts/1');
    dispatch(deleteDataDispatch(dataThree));
  } catch (error) {
    dispatch(onError(error));
  }
};

export { updateData, getData, deleteData, getDataDispatch };
