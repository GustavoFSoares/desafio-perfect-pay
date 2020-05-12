<template>
  <div class="money-container">{{ money | MoneyFilter }} left</div>
</template>

<script>
export default {
  data() {
    return {
      money: 90000000000
    };
  }
};
</script>

<style lang="scss" scoped>
.money-container {
  color: #ffffff;
  background-color: var(--secondary);
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  top: 0;
  position: sticky;
  padding: 20px;
  margin: 10px 0px;
}
</style>
