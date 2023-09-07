<template>
  <Transition name="fade" mode="out-in">
    <div
      @keyup="onKeyPress"
      v-if="isAKeyBeingPressed"
      :class="{
        wrapper: !wrapperStyles,
      }"
      :style="wrapperStyles"
    >
      <KeyBloc :show-condition="optionKeys.ShiftPressed" key-pressed="Shift" />
      <KeyBloc :show-condition="optionKeys.AltPressed" key-pressed="Alt" />
      <KeyBloc :show-condition="optionKeys.CtrlPressed" key-pressed="Ctrl" />
      <KeyBloc :show-condition="isNormalKeyPressed" :key-pressed="KeyOutput" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
  import KeyBloc from "./KeyBloc.vue";
  import useKeyDisplay from "../useKeyDisplay.ts";
  import { StyleValue, inject } from "vue";
  import { KeyPluginStylingKeys } from "../index.ts";
  const wrapperStyles = inject(KeyPluginStylingKeys.wrapper, undefined) as
    | StyleValue
    | undefined;

  const {
    onKeyPress,
    optionKeys,
    KeyOutput,
    isNormalKeyPressed,
    isAKeyBeingPressed,
  } = useKeyDisplay();
</script>

<style lang="css"></style>
