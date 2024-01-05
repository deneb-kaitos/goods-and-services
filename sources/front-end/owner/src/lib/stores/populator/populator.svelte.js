import {
  SuppliersStore,
} from '$lib/stores/Suppliers.svelte.js';
import {
  GoodsStore,
} from '$lib/stores/Goods.svelte.js';
import {
  SupplierGoodsStore,
} from '$lib/stores/SupplierGoods.svelte.js';
import {
  initSuppliers,
} from './initializers/initSuppliers.js';
import {
  initGoods,
} from './initializers/initGoods.js';
import {
  initSupplierProducts,
} from './initializers/initSupplierProducts.js';


export const initData = async () => {
  const supplierIds = await initSuppliers(SuppliersStore);
  const goodsIds = await initGoods(GoodsStore);
  await initSupplierProducts(supplierIds, goodsIds, SupplierGoodsStore);
};