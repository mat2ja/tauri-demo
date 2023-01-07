<script setup lang="ts">
import { EditorContent, useEditor } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value?: string): void
}>()

const content = useVModel(props, 'modelValue', emit)

const editor = useEditor({
  content: content.value,
  extensions: [
    StarterKit,
  ],
  autofocus: true,
  editorProps: {
    attributes: {
      class: 'prose prose-xl font-mono w-full focus:outline-none',
    },
  },
  onUpdate: () => {
    emit('update:modelValue', editor.value?.getHTML())
  },
})

watch(content, (val) => {
  const isSame = editor.value?.getHTML() === val
  if (isSame) return

  editor.value?.commands.setContent(val, false)
})
</script>

<template>
  <EditorContent :editor="editor" />
</template>
