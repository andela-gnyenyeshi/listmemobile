import { connect } from 'react-redux';
import Component from '../components/Home';
import { updateData, getData, deleteData, getDataDispatch } from '../actions/index';

const mapStateToProps = state => ({ state });

export default connect(mapStateToProps, {
  updateData,
  getData,
  deleteData,
  getDataDispatch,
})(Component);
