<template>
  <div @keyup="onKeyPress">
    <slot></slot>
    <Transition name="fade" mode="out-in">
      <div
        v-if="isAKeyBeingPressed"
        :class="{
          wrapper: !wrapperStyles,
        }"
        :style="wrapperStyles"
      >
        <KeyBloc
          :show-condition="optionKeys.ShiftPressed"
          key-pressed="Shift"
        />
        <KeyBloc :show-condition="optionKeys.AltPressed" key-pressed="Alt" />
        <KeyBloc :show-condition="optionKeys.CtrlPressed" key-pressed="Ctrl" />
        <KeyBloc
          :show-condition="isNormalKeyPressed"
          :key-pressed="KeyOutput"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
  import KeyBloc from "./KeyBloc.vue";
  import useKeyDisplay from "../useKeyDisplay.ts";
  import { KeyPluginStylingKeys } from "../index.ts";
  import { StyleValue, inject } from "vue";
  const wrapperStyles = inject(KeyPluginStylingKeys.wrapper) as
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
