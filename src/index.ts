import { App } from "vue";
import Dummy from "./_Dummy.vue";

export default {
  install: (app: App) => {
    app.component("Dummy", Dummy);
  }
}

export { Dummy };
