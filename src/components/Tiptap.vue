<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const { modelValue: content } = defineModel<{
  modelValue: string
}>()

const editor = useEditor({
  content: content.value,
  extensions: [
    StarterKit,
  ],
})

watch(content, (val) => {
  const isSame = editor.value?.getHTML() === val
  if (isSame) return

  if (val) {
    editor.value?.commands.setContent(val, false)
  }
})
</script>

<template>
  <EditorContent :editor="editor" />
</template>
