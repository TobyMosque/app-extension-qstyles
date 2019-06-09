// import something here
import { state as btnGroupState } from 'quasar-app-extension-qstyles/src/styles/btn-group'
import { state as basicState } from 'quasar-app-extension-qstyles/src/styles/basic'
import { state as fieldState } from 'quasar-app-extension-qstyles/src/styles/field'
import { colors } from 'quasar'

// "async" is optional
export default async (context) => {
  colors.setBrand('primary', '#009688')
  colors.setBrand('secondary', '#673ab7')
  btnGroupState.color = 'secondary'
  basicState.dark = true
  basicState.color = 'primary'
  fieldState.filled = false
  fieldState.borderless = false
  fieldState.standout = false
  fieldState.outlined = true
}
