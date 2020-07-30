import {createSelector} from 'reselect';
import {initialState} from '../reducers';

const widgetDispatcherSelector = (state) => state.demo || initialState;

const getData = () =>
  createSelector(widgetDispatcherSelector, (widgetData2) => widgetData2);

export {widgetDispatcherSelector, getData};
