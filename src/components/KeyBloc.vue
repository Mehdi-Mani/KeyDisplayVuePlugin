<template>
  <span
    :class="{ keyblock: !keyBlockStyles }"
    :style="keyBlockStyles"
    v-if="props.showCondition"
    >{{ props.keyPressed }}
  </span>
</template>

<script setup lang="ts">
  import { KeyPluginStylingKeys } from "../index.ts";
  import { inject, StyleValue } from "vue";

  const props = withDefaults(
    defineProps<{
      showCondition?: boolean;
      keyPressed: string;
    }>(),
    { showCondition: true }
  );
  const keyBlockStyles = inject(KeyPluginStylingKeys.key) as
    | StyleValue
    | undefined;
</script>

<style scoped>
  .keyblock {
    border-color: white;
    border-width: 1px;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #eee;
    color: black;
  }
  @media (prefers-color-scheme: light) {
    .keyblock {
      background-color: #252525;
      color: white;
      border-color: black;
    }
  }
</style>
