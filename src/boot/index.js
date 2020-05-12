import Vue from "vue";
import ImportStyles from "./import-styles";
import MaterialComponents from "./material-components";
import MoneyFIlter from "./money-filter";

export default ({ App, router, store }) => {
  ImportStyles({ Vue, App, router, store });
  MaterialComponents({ Vue, App, router, store });
  MoneyFIlter({ Vue, App, router, store });
};
