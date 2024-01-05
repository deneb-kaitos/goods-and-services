import {
  validatePassedObject,
} from '../helpers/validatePassedObject.js';
/**
 * @param {Array<string>} supplierIds
 * @param {Array<string>} goodsIds
 */
export const initSupplierProducts = async (supplierIds = null, productIds = null, store = null) => {
  validatePassedObject(supplierIds);
  validatePassedObject(productIds);
  validatePassedObject(store);

  supplierIds.forEach((supplierId) => {
    store.load(supplierId, productIds);
  });
}