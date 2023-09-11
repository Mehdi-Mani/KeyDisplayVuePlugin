import { type Emitter } from "mitt";
import { computed, inject, onMounted, reactive, ref, provide, Ref } from "vue";
import KeyPluginOptions from "./types/KeyPluginOptions";
import { KeyQueue } from "./entities/KeyQueue";
import useKeyHandler from "./useKeyHandler";

export default function useKeyDisplay(options?: KeyPluginOptions) {
  const emitter = ref<Emitter<any>>();
  const keyQueue = new KeyQueue(ref([]), options);
  const isAKeyBeingPressed = computed(() => keyQueue.isEmpty());

  function onKeyPressEvent(e: KeyboardEvent) {
    emitter.value?.emit("keyPressed", e);
  }

  function onKeyPressHandler(e: KeyboardEvent) {
    const keyEntity = useKeyHandler(e, options);
    if (keyEntity) {
      keyQueue.addToQueue(keyEntity);
    }
  }
  function setupEventBinding() {
    window.addEventListener("keyup", onKeyPressEvent, false);
    emitter.value = inject<Emitter<any>>("emitter");
    emitter.value?.on("keyPressed", onKeyPressHandler);
  }
  onMounted(() => {
    setupEventBinding();
  });

  return {
    onKeyPress: onKeyPressEvent,
    keyQueue,
    isAKeyBeingPressed,
  };
}
