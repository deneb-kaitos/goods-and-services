import {
  getSingleRandomValue,
} from './getSingleRandomValue.js';

/**
 * 
 * @param {Array<string>} array 
 */
export const getMultipleRandomValues = (array = null) => {
  const numOfReturnedItems = Math.trunc(Math.random() * (array.length - 1) + 1);
  const result = new Set();

  for (let i = 0; i < numOfReturnedItems; i += 1) {
    result.add(getSingleRandomValue(array));
  }

  return Array.from(result);
}