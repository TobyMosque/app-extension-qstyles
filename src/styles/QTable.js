import QStyleFactory from './QStyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  grid = void 0
  flat = void 0
  bordered = void 0
  square = void 0
  tableStyle = void 0
  tableClass = void 0
  tableDarkClass = void 0
  tableLightClass = void 0
  tableHeaderStyle = void 0
  tableHeaderClass = void 0
  tableHeaderDarkClass = void 0
  tableHeaderLightClass = void 0
	cardStyle = void 0
  cardClass = void 0
  cardDarkClass = void 0
  cardLightClass = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ], 
  cbComputed (computed) {
    computed.__tableClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.tableClass, 'tableClass')
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let darkClass = this.__getStyleProp(this.$attrs.tableDarkClass, 'tableDarkClass')
        let lightClass = this.__getStyleProp(this.$attrs.tableLightClass, 'tableLightClass')
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
    computed.__tableHeaderClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.tableHeaderClass, 'tableHeaderClass')
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let darkClass = this.__getStyleProp(this.$attrs.tableHeaderDarkClass, 'tableHeaderDarkClass')
        let lightClass = this.__getStyleProp(this.$attrs.tableHeaderLightClass, 'tableHeaderLightClass')
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
    computed.__cardClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.cardClass, 'cardClass')
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let darkClass = this.__getStyleProp(this.$attrs.cardDarkClass, 'cardDarkClass')
        let lightClass = this.__getStyleProp(this.$attrs.cardLightClass, 'cardLightClass')
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
  }
})
export default state
export { Model, mixin }