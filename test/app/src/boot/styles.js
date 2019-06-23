// import something here
import { colors } from 'quasar'

import { registerTheme, setTheme, QStyle, QPopup, QPageContainer, QDrawer, QBtnShared, QIcon, QField, QCard, QList, QTabPanels, QSeparator } from 'quasar-app-extension-qstyles/src/themer'

// "async" is optional
export default async ({ ssrContext }) => {
  registerTheme('dark-outlined', () => {
    if (!ssrContext) {
      colors.setBrand('primary', '#009688')
      colors.setBrand('secondary', '#673ab7')
    }
    QPopup.contentDarkClass = 'bg-grey-9 text-white'
    QPopup.contentLightClass = 'bg-grey-2 text-black'
    QBtnShared.color = 'secondary'
    QIcon.color = null
    QStyle.dark = true
    QStyle.color = 'primary'
    QField.outlined = true
    QCard.flat = true
    QCard.bordered = true
    QCard.darkClass = 'bg-grey-9 text-white'
    QCard.lightClass = 'bg-grey-2 text-black'
    QList.darkClass = 'bg-grey-9 text-white'
    QList.lightClass = 'bg-grey-2 text-black'
    QTabPanels.darkClass = 'bg-grey-9 text-white'
    QTabPanels.lightClass = 'bg-grey-2 text-black'
    QDrawer.contentDarkClass = 'bg-grey-9 text-white'
    QDrawer.contentLightClass = 'bg-grey-2 text-black'
    QDrawer.bordered = true
    QPageContainer.darkClass = 'bg-grey-10'
    QPageContainer.lightClass = 'bg-grey-1'
    QSeparator.color = null
  })
  setTheme('dark-outlined')
}
