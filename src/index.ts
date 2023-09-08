import { App } from "vue";
import KeyAnchor from "./components/KeyAnchor.vue";

export default {
  install: (app: App) => {
    app.component("KeyAnchor", KeyAnchor);
  },
};

export { KeyAnchor };
