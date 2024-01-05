import {
  validatePassedObject,
} from '../helpers/validatePassedObject.js';
import {
  Cities,
} from '../constants/cities.js';
import {
  FirstNames,
} from '../constants/firstNames.js';
import {
  LastNames,
} from '../constants/lastNames.js';
import {
  StreetNames,
} from '../constants/streets.js';
import {
  ZipCodes,
} from '../constants/zipCodes.js';
import {
  getSingleRandomValue,
} from '../helpers/getSingleRandomValue.js';
import {
  generateBuildingNumber,
} from '../helpers/generateBuildingNumber.js';
import {
  generatePhoneNumber,
} from '../helpers/generatePhoneNumber.js';
import {
  normalizeEmailAddress,
} from '../helpers/normalizeEmailAddress.js';

/**
 * 
 * @param {SuppliersStore} store 
 */
export const initSuppliers = async (store = null) => {
  validatePassedObject(store);

  const result = [];
  const suppliersMap = new Map();

  for (let i = 0; i < 10; i += 1) {
    const country = 'Deutschland';
    const city = getSingleRandomValue(Cities);
    const street = getSingleRandomValue(StreetNames);
    const building = generateBuildingNumber();
    const zip = getSingleRandomValue(ZipCodes);
    const firstName = getSingleRandomValue(FirstNames);
    const lastName = getSingleRandomValue(LastNames);
    const companyName = `${firstName} ${lastName} GmbH`;
    const supplierInfo = {
      id: crypto.randomUUID(),
      creationDate: Date.now(),
      companyInfo: {
        name: companyName,
        address: {
          country,
          city,
          street,
          building,
          zip,
        },
      },
      PoC: {
        firstName,
        lastName,
        email: normalizeEmailAddress(`${firstName}.${lastName}@example.com`),
        phone: generatePhoneNumber(' '),
      },
    };

    suppliersMap.set(supplierInfo.id, supplierInfo);
    result.push(supplierInfo.id);
  }

  await store.load(suppliersMap);

  return result;
};