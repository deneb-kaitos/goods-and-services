/**
 * 
 * @param {GoodsStore} store 
 */
export const initGoods = async (store = null) => {
  if (store === null) {
    throw new ReferenceError('store is undefined');
  }

  const result = [];
  const goodsMap = new Map();

  for (let i = 0; i < 10; i += 1) {
    const product = {
      id: crypto.randomUUID(),
      name: 'salt',
      manufacturer: {
        name: 'Salz Manufakture GmbH',
      },
      categories: [
        'condiments',
      ],
    };

    goodsMap.set(product.id, product);
    result.push(product.id);
  }

  await store.load(goodsMap);

  return result;
};
