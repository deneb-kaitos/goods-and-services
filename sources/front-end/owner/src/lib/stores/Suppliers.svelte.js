/**
 * 
 * @param {Map} suppliersMap 
 */
function populateTestSuppliers(suppliersMap = null) {
  if (suppliersMap === null) {
    throw new ReferenceError('suppliersMap is undefined');
  }

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
  }
}

class Suppliers {
  state = $state(new Map());

  constructor() {
    console.log(`${this.constructor.name}.ctor`);

    populateTestSuppliers(this.state);
  }
}

export const SuppliersStore = new Suppliers();