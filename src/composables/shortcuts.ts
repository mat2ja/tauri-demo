type ShortcutConfig = Record<string, { key: string; handler: () => void }>
export const useShortcuts = (config: ShortcutConfig) => {
  const keys = useMagicKeys()

  type ShortcutsThing = keyof typeof config

  const defineShortcut = (thing: ShortcutsThing) => {
    const { key, handler } = config[thing]
    whenever(keys[key], handler)
  }

  const defineShortcuts = () => (Object.keys(config) as ShortcutsThing[]).forEach(defineShortcut)

  defineShortcuts()
}

export const useGlobalShortcuts = () => {
  const { toggleTheme } = useTheme()

  const config = {
    dark: {
      key: 'cmd+j',
      handler: toggleTheme,
    },
  }

  useShortcuts(config)
}
