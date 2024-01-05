class Suppliers {
  state = $state(new Map());

  constructor() {
    console.log(`${this.constructor.name}.ctor`);
  }

  load(suppliersMap = null) {
    if (suppliersMap === null) {
      throw new ReferenceError('suppliersMap is undefined');
    }

    this.state = structuredClone(suppliersMap);
  }
}

export const SuppliersStore = new Suppliers();