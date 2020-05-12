<template>
  <div class="product-list">
    <div class="product-item" v-for="(product, index) in products" :key="index">
      <ProductCard :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard";
import ProductList from "../../../productList";
export default {
  data() {
    return {
      products: []
    };
  },
  components: {
    ProductCard
  },
  beforeMount() {
    this.products = ProductList.map(product => {
      return {
        ...product,
        // picture: `@/assets/${product.picture}`,
        picture: require(`@/assets/${product.picture}`),
        amount: 0
      };
    });
  }
};
</script>

<style lang="scss">
.product-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

@media screen and (max-width: 900px) {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
