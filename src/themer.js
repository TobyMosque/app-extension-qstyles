import QTheme from 'quasar-app-extension-qstyles/src/styles/QTheme'
import QStyle from 'quasar-app-extension-qstyles/src/styles/QStyle'
import QAjaxBar from 'quasar-app-extension-qstyles/src/styles/QAjaxBar'
import QAvatar from 'quasar-app-extension-qstyles/src/styles/QAvatar'
import QBadge from 'quasar-app-extension-qstyles/src/styles/QBadge'
import QBanner from 'quasar-app-extension-qstyles/src/styles/QBanner'
import QBar from 'quasar-app-extension-qstyles/src/styles/QBar'
import QBreadcrumbs from 'quasar-app-extension-qstyles/src/styles/QBreadcrumbs'
import QBtnGroup from 'quasar-app-extension-qstyles/src/styles/QBtnGroup'
import QBtnShared from 'quasar-app-extension-qstyles/src/styles/QBtnShared'
import QBtnToggle from 'quasar-app-extension-qstyles/src/styles/QBtnToggle'
import QBtn from 'quasar-app-extension-qstyles/src/styles/QBtn'
import QBtnDropdown from 'quasar-app-extension-qstyles/src/styles/QBtnDropdown'
import QCard from 'quasar-app-extension-qstyles/src/styles/QCard'
import QCarousel from 'quasar-app-extension-qstyles/src/styles/QCarousel'
import QChatMessage from 'quasar-app-extension-qstyles/src/styles/QChatMessage'
import QCheckbox from 'quasar-app-extension-qstyles/src/styles/QCheckbox'
import QChip from 'quasar-app-extension-qstyles/src/styles/QChip'
import QCircularProgress from 'quasar-app-extension-qstyles/src/styles/QCircularProgress'
import QColor from 'quasar-app-extension-qstyles/src/styles/QColor'
import QDate from 'quasar-app-extension-qstyles/src/styles/QDate'
import QDialog from 'quasar-app-extension-qstyles/src/styles/QDialog'
import QEditor from 'quasar-app-extension-qstyles/src/styles/QEditor'
import QExpansionItem from 'quasar-app-extension-qstyles/src/styles/QExpansionItem'
import QField from 'quasar-app-extension-qstyles/src/styles/QField'
import QInput from 'quasar-app-extension-qstyles/src/styles/QInput'
import QOptionGroup from 'quasar-app-extension-qstyles/src/styles/QOptionGroup'
import QRadio from 'quasar-app-extension-qstyles/src/styles/QRadio'
import QRange from 'quasar-app-extension-qstyles/src/styles/QRange'
import QSelect from 'quasar-app-extension-qstyles/src/styles/QSelect'
import QSeparator from 'quasar-app-extension-qstyles/src/styles/QSeparator'
import QSlider from 'quasar-app-extension-qstyles/src/styles/QSlider'
import QTime from 'quasar-app-extension-qstyles/src/styles/QTime'
import QToggle from 'quasar-app-extension-qstyles/src/styles/QToggle'

const themes = {}
const states = [
  QTheme,
  QStyle,
  QAjaxBar,
  QAvatar,
  QBadge,
  QBanner,
  QBar,
  QBreadcrumbs,
  QBtnGroup,
  QBtnShared,
  QBtnToggle,
  QBtn,
  QBtnDropdown,
  QCard,
  QCarousel,
  QChatMessage,
  QCheckbox,
  QChip,
  QCircularProgress,
  QColor,
  QDate,
  QDialog,
  QEditor,
  QExpansionItem,
  QField,
  QInput,
  QOptionGroup,
  QRadio,
  QRange,
  QSelect,
  QSeparator,
  QSlider,
  QTime,
  QToggle
]

const reset = function () {
  states.forEach(state => {
    Object.keys(state).forEach(key => {
      state[key] = void 0
    })
  })
}

const setTheme = function (name) {
  reset()
  if (themes[name]) {
    themes[name]()
  }
}

const registerTheme = function (name, callback) {
  themes[name] = callback
}

export {
  reset,
  setTheme,
  registerTheme,
  QTheme,
  QStyle,
  QAjaxBar,
  QAvatar,
  QBadge,
  QBanner,
  QBar,
  QBreadcrumbs,
  QBtnGroup,
  QBtnShared,
  QBtnToggle,
  QBtn,
  QBtnDropdown,
  QCard,
  QCarousel,
  QChatMessage,
  QCheckbox,
  QChip,
  QCircularProgress,
  QColor,
  QDate,
  QDialog,
  QEditor,
  QExpansionItem,
  QField,
  QInput,
  QOptionGroup,
  QRadio,
  QRange,
  QSelect,
  QSeparator,
  QSlider,
  QTime,
  QToggle
}
