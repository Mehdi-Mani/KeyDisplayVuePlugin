import { App } from "vue";
import KeyDisplayWrapper from "./components/KeyDisplayWrapper.vue";
import KeyDisplayStandalone from "./components/KeyDisplayStandalone.vue";
import { StyleValue } from "vue";
export type KeyPluginOptions = {
  KeyStylesObject?: StyleValue;
  KeyBlockStylesObject?: StyleValue;
};
export enum KeyPluginStylingKeys {
  "wrapper" = "KeyDisplayPlugin.wrapperStyles",
  "key" = "KeyDisplayPlugin.keyBlockStyles",
}
export default {
  install: (app: App, options?: KeyPluginOptions) => {
    app.component("KeyDisplayWrapper", KeyDisplayWrapper);
    app.component("KeyDisplay", KeyDisplayStandalone);
    app.provide(KeyPluginStylingKeys.wrapper, options?.KeyStylesObject);
    app.provide(KeyPluginStylingKeys.key, options?.KeyBlockStylesObject);
  },
};
