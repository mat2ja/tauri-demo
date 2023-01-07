<script lang="ts" setup>
const { pickRandomTheme } = useTheme()

onMounted(() => {
  pickRandomTheme()
})

const content = ref(`
        <h2>
          Hi there,
        </h2>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      `,
)

useGlobalShortcuts()
</script>

<template>
  <div class="w-full mx-auto max-w-4xl p-8 pb-60">
    <div class="space-y-8">
      <TheHeader />

      <div class="">
        <Tiptap $="content" class="w-full" />
      </div>
    </div>
  </div>
</template>

<style lang="postcss">
body {
  min-height: 100vh;
  caret-shape: block;
}

::selection {
}
</style>
