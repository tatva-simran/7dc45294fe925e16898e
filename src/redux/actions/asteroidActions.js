export const GET_ASTEROID_DATA = 'GET_ASTEROID_DATA';
export const GET_RANDOM_ASTEROID_ID = 'GET_RANDOM_ASTEROID_ID';
export const SET_ASTEROID_DATA = 'SET_ASTEROID_DATA';

export function getAsteroidData(asteroidId) {
  return {type: GET_ASTEROID_DATA, asteroidId};
}

export function getRandomAsteroidId() {
  return {type: GET_RANDOM_ASTEROID_ID};
}

export function setAstroidData(data) {
  console.log('data', data);
  return {type: SET_ASTEROID_DATA, data};
}
