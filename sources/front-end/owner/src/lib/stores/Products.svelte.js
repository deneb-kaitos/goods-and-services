class Products {
  state = $state(new Map());

  constructor() {
    console.log(`${this.constructor.name}.ctor`);
  }

  load(productsMap = null) {
    if (productsMap === null) {
      throw new ReferenceError('productsMap is undefined');
    }

    this.state = structuredClone(productsMap);
  }
}

export const ProductsStore = new Products();