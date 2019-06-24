import { registerTheme, setTheme, QStyle, QPopup, QPageContainer, QDrawer, QBtnShared, QIcon, QField, QCard, QList, QTabPanels, QSeparator } from 'quasar-app-extension-qstyles/src/themer'
import colorService from '../services/colors'

// "async" is optional
export default async ({ Vue, ssrContext }) => {
  await colorService.initialize(Vue)
  registerTheme('dark-outlined', () => {
    if (!ssrContext) {
      colorService.setBrand('primary', '#009688')
      colorService.setBrand('secondary', '#673ab7')
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
