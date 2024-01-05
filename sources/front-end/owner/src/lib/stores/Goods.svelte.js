class Goods {
  state = $state(new Map());

  constructor() {
    console.log(`${this.constructor.name}.ctor`);
  }

  load(goodsMap = null) {
    if (goodsMap === null) {
      throw new ReferenceError('goodsMap is undefined');
    }

    this.state = structuredClone(goodsMap);
  }
}

export const GoodsStore = new Goods();