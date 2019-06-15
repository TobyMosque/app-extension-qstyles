// import something here
import { colors } from 'quasar'
import { themes, field, base, card, btnCommon, separator } from 'quasar-app-extension-qstyles/styles'

// "async" is optional
export default async (context) => {
  themes.dark = 'bg-grey-9 text-white'
  colors.setBrand('primary', '#009688')
  colors.setBrand('secondary', '#673ab7')
  btnCommon.color = 'secondary'
  base.dark = true
  base.color = 'primary'
  field.outlined = true
  card.flat = true
  card.bordered = true
  separator.color = null
}
