import {
  getSingleRandomValue,
} from '../helpers/getSingleRandomValue.js';
import {
  validatePassedObject,
} from '../helpers/validatePassedObject.js';
import {
  foodNames,
  scientificNames,
  groupNames,
  subGroupNames,
} from '../constants/products-groups-raw.js';

const manufacturerNames = Object.freeze((new Array(10)).fill('').map((_, idx) => `Manufacturer ${idx} GmbH`));

/**
 * 
 * @param {Array<Array>} arrayOfArrays 
 */
const checkDataLength = (arrayOfArrays) => {
  validatePassedObject(arrayOfArrays);

  arrayOfArrays.forEach((array) => {
    validatePassedObject(array);
  })

  const setOfLengths = new Set(arrayOfArrays.map((a) => a.length));

  if (setOfLengths.size !== 1) {
    throw new RangeError(`arrays are expected to be of the same length, but they are not: ${arrayOfArrays.map((a) => a.length).join(' vs ')}`);
  }
};

/**
 * 
 * @param {ProductsStore} store 
 */
export const initProducts = async (store = null) => {
  checkDataLength([foodNames, scientificNames, groupNames, subGroupNames]);

  const uniqueGroupNames = new Set(groupNames);
  const uniqueSubGroupNames = new Set(subGroupNames);

  console.log({
    uniqueGroupNames,
    uniqueSubGroupNames,
  })

  const numOfItems = foodNames.length;
  //
  const result = [];
  const productsMap = new Map();

  for (let i = 0; i < numOfItems; i += 1) {
    const product = {
      id: crypto.randomUUID(),
      name: foodNames[i],
      scientificName: scientificNames[i],
      groupName: groupNames[i],
      subGroupName: subGroupNames[i],
      manufacturer: {
        name: getSingleRandomValue(manufacturerNames),
      },
    };

    productsMap.set(product.id, product);
    result.push(product.id);
  }

  await store.load(productsMap);

  console.log({ productsMap });

  return result;
};
