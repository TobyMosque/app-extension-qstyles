// import something here
import { colors } from 'quasar'

import { registerTheme, setTheme, QStyle, QTheme, QBtnShared, QField, QCard, QSeparator } from 'quasar-app-extension-qstyles/src/themer'

// "async" is optional
export default async ({ ssrContext }) => {
  registerTheme('dark-outlined', () => {
    if (!ssrContext) {
      colors.setBrand('primary', '#009688')
      colors.setBrand('secondary', '#673ab7')
    }
    QTheme.dark = 'bg-grey-9 text-white'
    QBtnShared.color = 'secondary'
    QStyle.dark = true
    QStyle.color = 'primary'
    QField.outlined = true
    QCard.flat = true
    QCard.bordered = true
    QCard.darkClass = 'bg-grey-9 text-white'
    QSeparator.color = null
  })
  setTheme('dark-outlined')
}
