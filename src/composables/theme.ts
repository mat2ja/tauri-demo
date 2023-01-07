export const useTheme = () => {
  const mode = useColorMode({
    attribute: 'data-theme',
    modes: {
      dark: 'black',
      light: 'lofi',
    },
  })

  const isDark = computed(() => mode.value === 'dark')
  const isLight = computed(() => mode.value === 'light')

  const toggleTheme = () => {
    if (isDark.value)
      mode.value = 'light'

    else
      mode.value = 'dark'
  }

  return {
    mode,
    isDark,
    isLight,
    toggleTheme,
  }
}
