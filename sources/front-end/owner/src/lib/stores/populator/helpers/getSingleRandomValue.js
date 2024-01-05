import {
  validatePassedObject,
} from './validatePassedObject.js';

/**
 * 
 * @param {Array<string>} array 
 */
export const getSingleRandomValue = (array = null) => {
  validatePassedObject(array);

  const idx = Math.trunc(Math.random() * (array.length - 1));

  return array[idx];
}