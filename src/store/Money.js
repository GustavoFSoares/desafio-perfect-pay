export default {
  namespaced: {},
  state: {
    startMoney: 90000000000,
    money: 90000000000,
    productList: []
  },
  getters: {
    getMoney(state) {
      return state.money;
    },
    getProductList(state) {
      return state.productList;
    }
  },
  mutations: {
    SET_MONEY(state, money) {
      state.money = money;
    },
    SET_PRODUCT_LIST(state, productList) {
      state.productList = productList;
    }
  },
  actions: {
    async buyProduct({ commit, dispatch }, product) {
      const productList = await dispatch("addProductOnList", product);
      const newMoney = await dispatch("spendMoney", productList);
      if (newMoney) {
        await commit("SET_PRODUCT_LIST", productList);
        await commit("SET_MONEY", newMoney);

        return true;
      } else {
        return false;
      }
    },
    async spendMoney({ state }, productList) {
      const addedExpenses = await productList.reduce(
        ({ expenses }, { price, amount }) => {
          let productValue = price * amount;

          expenses = expenses + productValue;
          return { expenses };
        },
        { expenses: 0 }
      );

      const remainingMoney = state.startMoney - addedExpenses.expenses;
      return remainingMoney > 0 ? remainingMoney : false;
    },
    async addProductOnList({ state }, product) {
      const productList = state.productList;

      let productIndex = productList.findIndex(p => p.name === product.name);
      if (productIndex === -1) {
        productList.push(product);
      } else {
        productList[productIndex] = { ...product };
      }

      return productList;
    }
  }
};
