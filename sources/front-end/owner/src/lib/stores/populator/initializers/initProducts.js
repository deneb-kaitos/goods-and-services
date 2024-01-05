import {
  getSingleRandomValue,
} from '../helpers/getSingleRandomValue.js';
import {
  getMultipleRandomValues,
} from '../helpers/getMultipleRandomValues.js';

const productNames = Object.freeze((new Array(100)).fill('').map((_, idx) => `product ${idx}`));
const manufacturerNames = Object.freeze((new Array(10)).fill('').map((_, idx) => `Manufacturer ${idx} GmbH`));
const categoryNames = Object.freeze((new Array(5)).fill('').map((_, idx) => `category_${idx}`));

/**
 * 
 * @param {ProductsStore} store 
 */
export const initProducts = async (store = null) => {
  const result = [];
  const goodsMap = new Map();

  for (let i = 0; i < 10; i += 1) {
    const product = {
      id: crypto.randomUUID(),
      name: getSingleRandomValue(productNames),
      manufacturer: {
        name: getSingleRandomValue(manufacturerNames),
      },
      categories: getMultipleRandomValues(categoryNames),
    };

    goodsMap.set(product.id, product);
    result.push(product.id);
  }

  await store.load(goodsMap);

  return result;
};
