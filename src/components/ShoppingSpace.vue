<template>
  <div class="shopping-space">
    <div class="title">Your Shopping Space</div>
    <div class="shopping-list">
      <div
        class="product-item"
        v-for="(product, index) in $store.getters[`MoneyStore/getProductList`]"
        :key="index"
      >
        <img
          class="inline product-image"
          :src="product.picture"
          :alt="product.name"
        />
        <div class="inline product-title">{{ product.name }}</div>
        <div class="inline product-amount">x {{ Number(product.amount) }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.shopping-space {
  max-width: 100%;
  background-color: #ffffff;
  text-align: center;
  font-size: 18px;
  margin-top: 10px;
  padding: 15px;

  .title {
    color: var(--secondary);
    font-size: 28px;
    font-weight: bold;
  }

  .shopping-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px 0px;

    .product-item {
      .inline {
        display: inline;
        font-size: 16px;
      }

      .product-image {
        max-height: 50px;
        max-width: 50px;
        margin-right: 7px;
      }

      .product-amount {
        font-weight: bold;
        margin-left: 5px;
      }
    }
  }
}
</style>
