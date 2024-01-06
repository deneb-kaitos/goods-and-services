<script>
  import {
    SuppliersStore,
  } from '$lib/stores/Suppliers.svelte.js';
  import {
    FilteredProductsStore,
  } from '$lib/stores/FilteredProducts.svelte.js';

  /**
   * 
   * @param e {PointerEvent}
   */
  const showProductsBySupplier = (e) => {
    const {
      /**
       * @type {string}
      */
      supplierId,
    } = e?.target?.dataset;

    console.log('showProductsBySupplier', supplierId);
    FilteredProductsStore.filter({
      supplierId,
    }); 
  }
</script>

<style>
  article {
    --max-width: 95%;

    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 1rem;
    max-width: var(--max-width);
    width: var(--max-width);
    margin: 0 auto;
  }

  .suppliers,
  .products {
    display: grid;
    gap: 1rem; 
    overflow-y: auto;
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  
    border-radius: var(--border-radius);
  }

  .supplier-info {
    --gap: 0.5rem;

    display: grid;
    grid-template-areas:
      'company-info'
      'poc'
    ;
    gap: 0.5rem;
    padding: 0.5rem;
    background-color: var(--theme-black);
    border: 1px solid black;
  }

  .supplier-info :is(legend) {
    padding: 0 0.25rem;
    font-size: 1rem;
    color: var(--theme-glacier);
  }

  .company-info {
    grid-area: company-info;
    display: grid;
    grid-template-areas:
      'company-name'
      'company-address'
    ;
  } 

  .poc {
    grid-area: poc;
  }

  :is(.company-info, .poc, .controls) {
    display: grid;
    grid-auto-flow: row;
    gap: 1rem;
    padding: 1.5rem;
    border: 2px solid var(--main-background-color);
  }

  :is(.supplier-info, .company-info, .poc, .controls) {
    border-radius: var(--border-radius);
  }

  .company-name {
    grid-area: company-name;
    
    background-color: var(--theme-green);
    color: var(--theme-dark_gray);
  }

  .company-name,
  .poc-name {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .company-address {
    grid-area: company-address;
    display: flex;
    justify-content: end;
    align-items: center;
    font-size: 1.25rem;
  }

  .company-address :is(span:not(:first-of-type)) {
    padding-left: 0.5rem;
  }

  .company-address :is(.company-country, .company-city, .company-building)::after {
    content: ", ";
  }

  .poc :is(.poc-name, .poc-email-phone) {
    padding-left: 0.25rem;
  }

  .poc-email-phone {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-flow: row;
    gap: 1rem;
  }

  .poc-email-phone :is(.key, .value) {
    display: flex;
    align-items: center;
  }

  .poc-email-phone .key {
    justify-content: start;
  }

  .poc-email-phone .value {
    justify-content: end;
  }

  .poc-email-phone :is(a[href^="tel:"], a[href^="email:"]) {
    color: var(--main-color);
  }

  .controls :is(button) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .products {
    grid-template-rows: 4rem 1fr;
    grid-template-areas:
      'products-filters'
      'product-list'
    ;
  }

  .products > .products-filters {
    grid-area: products-filters;
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    align-items: center;
    gap: 0.25rem;
    padding: 0.25rem 0.5rem;

    border-radius: var(--border-radius);

    background-color: var(--theme-black);    
    border: 1px solid black;
  }

  .products > .product-list {
    grid-area: product-list;
    display: grid;
    grid-auto-flow: row;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
  }

  .product {
    display: grid;
    grid-template-rows: 1fr 3rem 3rem;
    grid-template-areas:
      'product-name'
      'product-categories'
      'manufacturer'
    ;
    gap: 0.5rem;
    background-color: var(--theme-black);
    border: 1px solid black;
    border-radius: var(--border-radius);
    padding: 0.5rem 1rem;
  }

  .product > .product-name {
    grid-area: product-name;
    font-size: 2rem;
  }

  .product > .product-categories {
    grid-area: product-categories;
    font-size: 1rem;
  }

  .product > .product-manufacturer {
    grid-area: manufacturer;
    font-size: 1rem;
  }

  .product :is(.product-name, .product-categories, .product-manufacturer) {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 1rem;
  }
</style>

<article>
  <div class="suppliers">
  {#each SuppliersStore.state.values() as supplierInfo(supplierInfo.id)}
    <div class="supplier-info" id={supplierInfo.id}>
      <fieldset class="company-info">
        <legend>company info</legend>
        <h2 class="company-name">{supplierInfo.companyInfo.name}</h2>
        <address class="company-address">
          <span class="company-country">{supplierInfo.companyInfo.address.country}</span>
          <span class="company-city">{supplierInfo.companyInfo.address.city}</span>
          <span class="company-street">{supplierInfo.companyInfo.address.street}</span>
          <span class="company-building">{supplierInfo.companyInfo.address.building}</span>
          <span class="company-zip">{supplierInfo.companyInfo.address.zip}</span>
        </address>
      </fieldset>
      <fieldset class="poc">
        <legend>point of contact</legend>
        <h2 class="poc-name">
            {supplierInfo.PoC.firstName} {supplierInfo.PoC.lastName}
        </h2>
        <div class="poc-email-phone">
          <div class="key">email</div>
          <a href="email:{supplierInfo.PoC.email}" class="value" target="_blank">{supplierInfo.PoC.email}</a>
          <div class="key">phone</div>
          <a href="tel:{supplierInfo.PoC.phone}" class="value" target="_blank">{supplierInfo.PoC.phone}</a> 
        </div>
      </fieldset>
      <fieldset class="controls">
        <legend>actions</legend>
        <button name="products" onclick="{showProductsBySupplier}" data-supplier-id={supplierInfo.id}>products</button>
      </fieldset>
    </div> 
  {/each}
  </div>
  <div class="products">
    <div class="products-filters">
      <button>
        Herbs and Spices
      </button>
      <button>
        Vegetables
      </button>
    </div>
    <div class="product-list">
    {#each FilteredProductsStore.state.values() as product(product.id)}
      <div id={product.id} class="product">
        <div class="product-name">{product.name}</div>
        <div class="product-categories">
          <div class="product-group">{product.groupName}</div>
          <div class="product-subgroup">{product.subGroupName}</div>
        </div>
        <div class="product-manufacturer">{product.manufacturer.name}</div>
      </div>
    {/each}
    </div>
  </div>
</article>