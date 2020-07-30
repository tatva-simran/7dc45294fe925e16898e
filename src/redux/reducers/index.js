// Imports: Dependencies
import {combineReducers} from 'redux';

// Imports: Reducers
import asteroidReducer from './asteroidReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  demo: asteroidReducer,
});

// Exports
export default rootReducer;
