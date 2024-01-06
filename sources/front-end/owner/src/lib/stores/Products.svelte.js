import {
  validatePassedObject,
} from './populator/helpers/validatePassedObject.js';

class Products {
  state = $state(new Map());

  constructor() {
    console.log(`${this.constructor.name}.ctor`);
  }

  load(productsMap = null) {
    validatePassedObject(productsMap);

    this.state = structuredClone(productsMap);
  }

  /**
   * 
   * @param {Set<string>} productIds 
   * @returns 
   */
  getProductsByIds(productIds = null) {
    validatePassedObject(productIds);

    const result = [];

    this.state.forEach((value, key) => {
      if (productIds.has(key)) {
        result.push(value);
      }
    });

    return result;
  }
}

export const ProductsStore = new Products();