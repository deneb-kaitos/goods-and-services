/**
 * 
 * @param {SuppliersStore} store 
 */
export const initSuppliers = async (store = null) => {
  if (store === null) {
    throw new ReferenceError('store is undefined');
  }

  const result = [];
  const suppliersMap = new Map();

  for (let i = 0; i < 3; i += 1) {
    const supplierInfo = {
      id: crypto.randomUUID(),
      creationDate: Date.now(),
      companyInfo: {
        name: `Number #${i} GmbH`,
        address: {
          country: 'Germany',
          city: 'Berlin',
          street: 'Examplestr.',
          building: '155',
          zip: '12720',
        },
      },
      PoC: {
        firstName: 'Günter',
        lastName: 'Federlechner',
        email: `${i}@example.com`,
        phone: '+491111111111',
      },
    };

    suppliersMap.set(supplierInfo.id, supplierInfo);
    result.push(supplierInfo.id);
  }

  await store.load(suppliersMap);

  return result;
};