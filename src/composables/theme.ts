import type { BasicColorSchema } from '@vueuse/core'
import { draw } from 'radash'

const themes = ['light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business', 'acid', 'lemonade', 'night', 'coffee', 'winter']
type Theme = typeof themes[number]

// TODO: local storage
export const useTheme = () => {
  const mode = useColorMode({
    attribute: 'data-theme',
    modes: {
      dark: 'black',
      light: 'lofi',
      ...themes.reduce((acc, mode) => ({ ...acc, [mode]: mode }), {}),
    },
  })

  // pick random item from themes array

  const isDark = computed(() => mode.value === 'dark')
  const isLight = computed(() => mode.value === 'light')

  const setTheme = (theme: Theme) => {
    mode.value = theme as BasicColorSchema
  }

  const pickRandomTheme = () => {
    let newMode = mode.value
    do {
      newMode = draw(themes) as BasicColorSchema
    } while (newMode === mode.value)
    mode.value = newMode
  }

  const toggleTheme = () => {
    if (isDark.value) {
      mode.value = 'light'
    }

    else {
      mode.value = 'dark'
    }
  }

  return {
    mode,
    isDark,
    isLight,
    toggleTheme,
    pickRandomTheme,
    setTheme,
    themes,
  }
}
