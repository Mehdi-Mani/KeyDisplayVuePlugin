import { type Emitter } from "mitt";
import { computed, inject, onMounted, reactive, ref } from "vue";

export default function useKeyDisplay() {
  const KeyOutput = ref("");
  const optionKeys = reactive({
    ShiftPressed: false,
    CtrlPressed: false,
    AltPressed: false,
  });
  const isOptionKeyPressed = computed(
    () =>
      optionKeys.AltPressed || optionKeys.CtrlPressed || optionKeys.ShiftPressed
  );
  const isNormalKeyPressed = computed(() => KeyOutput.value.length > 0);
  const isAKeyBeingPressed = computed(
    () => KeyOutput.value || isOptionKeyPressed.value
  );
  let aboutToClearTimeOut: string | number | NodeJS.Timeout | undefined;
  const emitter = ref<Emitter<any>>();

  function clearKey() {
    KeyOutput.value = "";
    optionKeys.AltPressed = false;
    optionKeys.CtrlPressed = false;
    optionKeys.ShiftPressed = false;
  }
  function onKeyPress(e: KeyboardEvent) {
    clearTimeout(aboutToClearTimeOut);
    emitter.value?.emit("keyPressed", e);
    aboutToClearTimeOut = setTimeout(() => {
      clearKey();
    }, 2000);
  }
  onMounted(() => {
    window.onkeydown = onKeyPress;
    emitter.value = inject<Emitter<any>>("emitter");
    emitter.value?.on("keyPressed", (e: KeyboardEvent) => {
      if (e.key !== "Control" && e.key !== "Alt" && e.key !== "Shift") {
        KeyOutput.value = e.key.toUpperCase();
      }
      optionKeys.ShiftPressed = e.shiftKey;
      optionKeys.AltPressed = e.altKey;
      optionKeys.CtrlPressed = e.ctrlKey;
    });
  });
  return {
    onKeyPress,
    optionKeys,
    KeyOutput,
    isNormalKeyPressed,
    isAKeyBeingPressed,
  };
}
