import {
  SuppliersStore,
} from '$lib/stores/Suppliers.svelte.js';
import {
  ProductsStore,
} from '$lib/stores/Products.svelte.js';
import {
  SupplierProductsStore,
} from '$lib/stores/SupplierProducts.svelte.js';
import {
  initSuppliers,
} from './initializers/initSuppliers.js';
import {
  initProducts,
} from './initializers/initProducts.js';
import {
  initSupplierProducts,
} from './initializers/initSupplierProducts.js';


export const initData = async () => {
  const supplierIds = await initSuppliers(SuppliersStore);
  const productsIds = await initProducts(ProductsStore);
  await initSupplierProducts(supplierIds, productsIds, SupplierProductsStore);
};