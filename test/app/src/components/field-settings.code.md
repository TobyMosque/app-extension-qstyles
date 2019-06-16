```js
import { QStyle, QTheme, QBtnShared, QBtn, QBtnGroup, QBtnDropdown, QBtnToggle, QField, QInput, QSelect, QSlider, QDate } from 'quasar-app-extension-qstyles/src/themer'

export default {
  name: 'ComponentFieldSettings',
  data () {
    return {
      QTheme: QTheme,
      QStyle: QStyle,
      QBtnShared: QBtnShared,
      QBtn: QBtn,
      QBtnGroup: QBtnGroup,
      QBtnDropdown: QBtnDropdown,
      QBtnToggle: QBtnToggle,
      QField: QField,
      QInput: QInput,
      QSelect: QSelect,
      QSlider: QSlider,
      QDate: QDate,
      tabSettings: 'field'
    }
  }
}
```