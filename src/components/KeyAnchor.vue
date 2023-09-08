<template>
  <section
    @keyup="onKeyPress"
    :class="{
      'keys-anchor': !keyPluginOptions.KeyAnchorStyleObject,
    }"
    :style="keyPluginOptions.KeyAnchorStyleObject"
  >
    <TransitionGroup
      name="fade"
      mode="out-in"
      tag="div"
      :class="{ 'keys-container': !keyPluginOptions.KeyContainerStyleObject }"
      :style="keyPluginOptions.KeyContainerStyleObject"
    >
      <template
        v-for="(keyEntity, index) in keyQueue.values"
        :key="keyEntity.id"
      >
        <KeyGroup
          v-if="index < keyPluginOptions.numberOfKeyGroupDisplayed"
          :key-entity="keyEntity"
        />
      </template>
    </TransitionGroup>
  </section>
</template>

<script setup lang="ts">
  import useKeyDisplay from "../useKeyDisplay.ts";
  import KeyGroup from "./KeyGroup.vue";
  import KeyPluginOptions, {
    KeyPluginOptionsDefault,
  } from "../type/KeyPluginOptions";

  const keyPluginOptions = withDefaults(
    defineProps<KeyPluginOptions>(),
    KeyPluginOptionsDefault
  );

  const { onKeyPress, keyQueue } = useKeyDisplay(keyPluginOptions);
</script>

<style lang="css">
  .keys-anchor {
    position: fixed;
    display: flex;
    justify-content: center;
    bottom: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
  .keys-container {
    flex-direction: column-reverse;
    flex-wrap: wrap;
    gap: 1rem;
    display: flex;
  }
</style>
../type/KeyPluginOptions.ts
