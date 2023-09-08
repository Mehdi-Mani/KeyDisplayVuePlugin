import { StyleValue } from "vue";

interface KeyPluginOptions {
  KeyAnchorStyleObject?: StyleValue | undefined;
  KeyContainerStyleObject?: StyleValue | undefined;
  KeyGroupStyleObject?: StyleValue | undefined;
  KeyBlocStyleObject?: StyleValue | undefined;
  KeyAltStyleObject?: StyleValue | undefined;
  KeyShiftStyleObject?: StyleValue | undefined;
  KeyCtrlStyleObject?: StyleValue | undefined;
  fadeDelay?: number;
  numberOfKeyGroupDisplayed?: number;
}
export const KeyPluginOptionsDefault = {
  fadeDelay: 2000,
  numberOfKeyGroupDisplayed: 3,
};
export default KeyPluginOptions;
