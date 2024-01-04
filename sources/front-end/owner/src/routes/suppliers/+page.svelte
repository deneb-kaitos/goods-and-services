<script>
  import {
    SuppliersStore,
  } from '$lib/stores/Suppliers.svelte.js';
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
    grid-template-columns: 1fr;
    grid-auto-flow: row;
    gap: 1rem; 
    overflow-y: auto;
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
    display: flex;
    
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
        <button name="products">products</button>
      </fieldset>
    </div> 
  {/each}
  </div>
  <div class="products">
    products
  </div>
</article>