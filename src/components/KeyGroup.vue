<template>
  <div
    v-if="!props.keyEntity.isEmpty()"
    :class="{ 'keys-group': !props?.keyPluginOptions?.KeyGroupStyleObject }"
    :style="props?.keyPluginOptions?.KeyGroupStyleObject"
  >
    <KeyBloc
      :key-plugin-options="props.keyPluginOptions"
      :show-condition="props.keyEntity.modifiersKeyState.shiftPressed"
      key-pressed="Shift"
    />
    <KeyBloc
      :key-plugin-options="props.keyPluginOptions"
      :show-condition="props.keyEntity.modifiersKeyState.altPressed"
      key-pressed="Alt"
    />
    <KeyBloc
      :key-plugin-options="props.keyPluginOptions"
      :show-condition="props.keyEntity.modifiersKeyState.ctrlPressed"
      key-pressed="Ctrl"
    />
    <KeyBloc
      :key-plugin-options="props.keyPluginOptions"
      :show-condition="props.keyEntity.content !== ''"
      :key-pressed="props.keyEntity.content"
    />
  </div>
</template>

<script setup lang="ts">
  import { KeyEntity } from "../entities/KeyEntity";
  import KeyBloc from "./KeyBloc.vue";
  import KeyPluginOptions from "src/types/KeyPluginOptions";

  const props = withDefaults(
    defineProps<{
      keyEntity: KeyEntity;
      keyPluginOptions?: KeyPluginOptions;
    }>(),
    {}
  );
</script>

<style lang="css" scoped>
  .keys-group {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
  }
</style>
