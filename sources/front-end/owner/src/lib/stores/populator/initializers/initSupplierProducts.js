import {
  validatePassedObject,
} from '../helpers/validatePassedObject.js';

/**
 * 
 * @param {Array<string>} productIds
 * @param {Number} percentage 
 * @returns {Array<string>} 
 */
const getRandomProducts = (productIds = null, percentage = 10) => {
  const resultSet = new Set();
  const expectedSetSize = Math.trunc (productIds.length / 100 * percentage);

  while(resultSet.size <= expectedSetSize) {
    const itemIdx = Math.trunc(Math.random() * productIds.length);
    resultSet.add(productIds[itemIdx]);
  }

  return Array.from(resultSet);
}

/**
 * @param {Array<string>} supplierIds
 * @param {Array<string>} goodsIds
 */
export const initSupplierProducts = async (supplierIds = null, productIds = null, store = null) => {
  validatePassedObject(supplierIds);
  validatePassedObject(productIds);
  validatePassedObject(store);

  supplierIds.forEach((supplierId) => {
    store.load(supplierId, getRandomProducts(productIds, 3));
  });
}