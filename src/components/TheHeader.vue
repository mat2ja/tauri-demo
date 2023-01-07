<script lang="ts" setup>
const { mode, themes, toggleTheme, pickRandomTheme } = useTheme()
</script>

<template>
  <div class="flex justify-end">
    <div class="form-control">
      <div class="flex items-center gap-2">
        <select v-model="mode" class="select select-sm select-ghost w-full max-w-xs">
          <option v-for="theme in themes" :key="theme" :value="theme">
            {{ theme }}
          </option>
        </select>
        <div class="tooltip tooltip-bottom flex items-center justify-center" data-tip="Pick random">
          <button class="btn btn-sm btn-secondary btn-square" @click="pickRandomTheme">
            <Icon name="uil:arrow-random" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
