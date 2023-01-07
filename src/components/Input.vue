<script lang="ts" setup>
const { modelValue: value } = defineModel<{
  modelValue: string
}>()
</script>

<template>
  <input v-model="value" type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs">
</template>
