import { App } from "vue";
import KeyAnchor from "./components/KeyAnchor.vue";
import { KeyEntity } from "./entities/KeyEntity";

export default {
  install: (app: App) => {
    app.component("KeyAnchor", KeyAnchor);
  },
};

export { KeyAnchor, KeyEntity };
