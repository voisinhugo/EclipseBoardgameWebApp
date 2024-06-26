import { i18n } from '@lingui/core'

export const updateLocale = async (locale: string) => {
  const { messages } = (await import(`../../locales/${locale}.ts`)) as {
    messages: Record<string, string>
  }

  i18n.load(locale, messages)
  i18n.activate(locale)

  document.documentElement.lang = locale
  document.querySelector('title')?.replaceChildren(i18n._('Eclipse Battle Calculator'))
}
