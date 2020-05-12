<template>
  <div class="page-container">
    <UserHeader />
    <MoneyContent />
    <ProductList />
    <ShoppingSpace />
  </div>
</template>

<script>
import UserHeader from "../components/UserHeader";
import MoneyContent from "../components/MoneyContent";
import ProductList from "../components/Product/ProductList";
import ShoppingSpace from "../components/ShoppingSpace";

export default {
  name: "Home",
  components: {
    UserHeader,
    MoneyContent,
    ProductList,
    ShoppingSpace
  }
};
</script>

<style lang="scss" scoped>
.page-container {
  max-width: 950px;
  margin-left: auto;
  margin-right: auto;
}
</style>
