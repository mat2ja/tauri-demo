<script lang="ts" setup>
const name = $ref('')

const greeting = computed(() => `Hello ${name}`)
const { mode, toggleTheme } = useTheme()
</script>

<template>
  <div class="w-full mx-auto max-w-5xl p-8">
    <div class="space-y-8">
      <div class="flex justify-end">
        <button class="btn" @click="toggleTheme">
          <Icon :name="mode === 'dark' ? 'ic:round-wb-sunny' : 'ic:round-dark-mode'" />
        </button>
      </div>

      <div class="flex flex-col gap-2">
        <Input $="name" placeholder="Your name" aria-label="Name" />
      </div>

      <div class="prose">
        <h1>
          {{ name ? greeting : 'Hi there!' }}
        </h1>
        <blockquote>
          Someone at some time said something.
        </blockquote>
      </div>

      <tiptap />
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital@0;1&display=swap');

body {
  min-height: 100vh;
}
</style>
