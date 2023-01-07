<script lang="ts" setup>
import { Icon as IconifyIcon } from '@iconify/vue'

const { name } = $defineProps<{
  name: string
}>()
</script>

<template>
  <IconifyIcon :icon="name" />
</template>
