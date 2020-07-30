import {put, takeLatest} from 'redux-saga/effects';
import _ from 'lodash';
import {apiService} from '../../services/apiService';
import * as asteroidActions from '../actions/asteroidActions';
import {selectRandomInt} from '../../utils/commonFunctions';
import {API_TOKEN} from '../../constants';

/**
 * watcher
 */
function* actionWatcher() {
  yield takeLatest('GET_ASTEROID_DATA', getAsteroidData);
  yield takeLatest('GET_RANDOM_ASTEROID_ID', getRandomAsteroidId);
}

/**
 * handler
 * @param value
 */
function* getAsteroidData(payload) {
  try {
    const asteroidId = _.get(payload, 'asteroidId', '');
    const asteroidUrl = `https://api.nasa.gov/neo/rest/v1/neo/${asteroidId}?api_key=${API_TOKEN}`;
    const response = yield apiService(asteroidUrl, 'GET');
    if (response.success) {
      yield put(asteroidActions.setAstroidData(response.data));
    } else {
      yield put(asteroidActions.setAstroidData(response.data));
    }
  } catch (error) {
    console.log('getAsteroidData', error);
  }
}

function* getRandomAsteroidId() {
  try {
    let randomAsteroidData = [];
    const url = 'https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY';
    const response = yield apiService(url, 'GET');
    const ramdomAstroidId =
      response.data.near_earth_objects[
        selectRandomInt(0, response.data.near_earth_objects.length - 1)
      ].id;
    if (ramdomAstroidId) {
      const randomAsteroidUrl = `https://api.nasa.gov/neo/rest/v1/neo/${ramdomAstroidId}?api_key=${API_TOKEN}`;
      randomAsteroidData = yield apiService(randomAsteroidUrl, 'GET');
    }
    if (randomAsteroidData.success) {
      yield put(asteroidActions.setAstroidData(randomAsteroidData.data));
    } else {
      yield put(asteroidActions.setAstroidData(response.message));
    }
  } catch (error) {
    console.log('getRandomAsteroidId', error);
  }
}

export default [actionWatcher];
