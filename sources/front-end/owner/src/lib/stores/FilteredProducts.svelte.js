import {
  ProductsStore,
} from '$lib/stores/Products.svelte.js';
import {
  SupplierProductsStore,
} from '$lib/stores/SupplierProducts.svelte.js';

class FilteredProducts {
  state = $state([]);
  #productSoreState = $state();
  #supplierProductsState = $state();

  constructor() {
    console.log(`${this.constructor.name}.ctor`);
    this.#productSoreState = ProductsStore.state;
    this.#supplierProductsState = SupplierProductsStore.productsBySupplier;
  }

  filter(criteria = null) {
    console.log(`${this.constructor.name}::filter`, criteria);
    const supplierProductIds = this.#supplierProductsState.get(criteria.supplierId);
    console.log({ supplierProductIds });
    const supplierProducts = ProductsStore.getProductsByIds(supplierProductIds);
    console.log({ supplierProducts });

    this.state = supplierProducts;
  }
}

export const FilteredProductsStore = new FilteredProducts();