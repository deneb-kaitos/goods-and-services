/**
 * @param {Array<string>} supplierIds
 * @param {Array<string>} goodsIds
 */
export const initSupplierProducts = async (supplierIds = null, productIds = null, store = null) => {
  if (supplierIds === null) {
    throw new ReferenceError('supplierIds is undefined');
  }

  if (productIds === null) {
    throw new ReferenceError('productIds is undefined');
  }

  if (store === null) {
    throw new ReferenceError('store is undefined');
  }

  supplierIds.forEach((supplierId) => {
    store.load(supplierId, productIds);
  });
}