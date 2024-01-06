class SupplierProducts {
  productsBySupplier = $state(new Map());

  constructor() {
    console.log(`${this.constructor.name}.ctor`);
  }

  /**
   * 
   * @param {string} supplierId 
   * @param {Array<string>} productIds 
   */
  load(supplierId = null, productIds = null) {
    if (supplierId === null) {
      throw new ReferenceError('supplierId is undefined');
    }

    if (productIds === null) {
      throw new ReferenceError('productIds is undefined');
    }

    /**
     * @var {Set} productSet
     */
    let existingProductSet = this.productsBySupplier.has(supplierId) ? this.productsBySupplier.get(supplierId) : new Set();
    const resultingSet = new Set([...Array.from(existingProductSet), ...productIds]);

    this.productsBySupplier.set(supplierId, resultingSet);

    console.log({ productsBySupplier: this.productsBySupplier });
  }
}

export const SupplierProductsStore = new SupplierProducts();