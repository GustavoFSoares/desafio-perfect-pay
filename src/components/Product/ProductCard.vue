<template>
  <div class="product-card-container">
    <img :src="product.picture" :alt="product.name" />
    <div class="item product-name">{{ product.name }}</div>
    <div class="item product-price">{{ product.price | MoneyFilter }}</div>
    <div class="item product-amount">
      <b-button
        @click="amount--"
        class="sell"
        v-bind:class="{ disable: !amount }"
        variant="danger"
      >
        Sell
      </b-button>
      <input class="form-control amount" type="number" v-model="amount" />
      <b-button
        @click="amount++"
        class="buy"
        v-bind:class="{ disable: cantBuy }"
        variant="secondary"
        :disabled="false"
      >
        Buy
      </b-button>
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    async amount(val) {
      if (Number(val) == 0) {
        this.amount = 0;
      }

      let buyApproved = await this.$store.dispatch("MoneyStore/buyProduct", {
        ...this.$props.product,
        amount: val
      });
      if (buyApproved) {
        this.$props.product.amount = val;
        return val;
      } else {
        this.amount = this.$props.product.amount;
      }
    }
  },
  computed: {
    cantBuy() {
      return (
        this.$store.getters["MoneyStore/getMoney"] < this.$props.product.price
      );
    }
  },
  data() {
    return {
      amount: 0
    };
  },
  props: {
    product: { type: Object, required: true }
  }
};
</script>

<style lang="scss">
.product-card-container {
  max-width: 100%;
  background-color: #ffffff;
  text-align: center;
  font-size: 18px;
  padding: 20px 15px;

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 110px;
    object-fit: contain;
    padding: 15px 10px 10px;
  }

  .item {
    font-size: 22px;
    &.product-name {
      font-weight: bold;
    }

    &.product-price {
      color: var(--secondary);
      font-size: 20px;
    }

    &.product-amount {
      font-weight: bold;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      margin-top: 25px;
      gap: 10px;

      input {
        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        &[type="number"] {
          -moz-appearance: textfield;
        }
      }

      .buy,
      .sell {
        font-weight: bold;

        &.disable {
          color: black;
          background-color: #f1f2f6;
          border-color: #f1f2f6;
          pointer-events: none;
        }
      }
      .amount {
        max-width: 100px;
        text-align: center;
        font-size: 16px;
        padding: 9px 12px;
        border-radius: 3px;
      }
      /* .buy {} */
    }
  }
}
</style>
