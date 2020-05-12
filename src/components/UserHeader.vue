<template>
  <h1 class="user-container">
    <img class="user-image" :src="user.image" :alt="user.name" />
    Spend {{ user.name }}' Money
  </h1>
</template>

<script>
import BillGatesImage from "../assets/billgates.png";
export default {
  name: "user-header",
  data() {
    return {
      user: {
        image: BillGatesImage,
        name: "Bill Gates"
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.user-container {
  font-size: 32px;
  margin-bottom: 10px;
  font-weight: bold;
  text-align: center;
  line-height: 1.6em;
  background: #ffffff;
  padding: 30px 20px;

  .user-image {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 25px;
    width: 125px;
    height: 125px;
    border-radius: 50%;
  }
}
</style>
