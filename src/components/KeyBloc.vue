<template>
  <span
    :class="{ keyblock: !props?.KeyPluginOptions?.KeyBlocStyleObject }"
    :style="props?.KeyPluginOptions?.KeyBlocStyleObject"
    v-if="props.showCondition"
    >{{ props.keyPressed }}
  </span>
</template>

<script setup lang="ts">
  import KeyPluginOptions from "src/types/KeyPluginOptions";
  const props = withDefaults(
    defineProps<{
      showCondition?: boolean;
      keyPressed: string;
      KeyPluginOptions?: KeyPluginOptions;
    }>(),
    { showCondition: true }
  );
</script>

<style lang="css" scoped>
  .keyblock {
    border-color: white;
    border-width: 1px;
    border-radius: 0.5rem;
    padding: 0.5rem;
    background-color: #eee;
    color: black;
    cursor: default;
  }
  @media (prefers-color-scheme: light) {
    .keyblock {
      background-color: #252525;
      color: white;
      border-color: black;
    }
  }
</style>
