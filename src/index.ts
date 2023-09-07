import { App } from "vue";
import KeyDisplayWrapper from "./components/KeyDisplayWrapper.vue";
import KeyDisplayStandalone from "./components/KeyDisplayStandalone.vue";
import { StyleValue } from "vue";
import "./styles/default.css";
export type KeyPluginOptions = {
  KeysWrapperStyleObject?: StyleValue;
  KeyStyleObject?: StyleValue;
};
export enum KeyPluginStylingKeys {
  "wrapper" = "KeyDisplayPlugin.wrapperStyle",
  "key" = "KeyDisplayPlugin.keyStyle",
}
export default {
  install: (app: App, options?: KeyPluginOptions) => {
    app.component("KeyDisplayWrapper", KeyDisplayWrapper);
    app.component("KeyDisplay", KeyDisplayStandalone);
    app.provide(KeyPluginStylingKeys.wrapper, options?.KeysWrapperStyleObject);
    app.provide(KeyPluginStylingKeys.key, options?.KeyStyleObject);
  },
};
