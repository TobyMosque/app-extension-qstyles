import QStyleFactory from './QStyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  bgColor = void 0
  filled = void 0
  outlined = void 0
  borderless = void 0
  standout = void 0
  standoutClass = void 0
  standoutDarkClass = void 0
  standoutLightClass = void 0
  hideBottomSpace = void 0
  rounded = void 0
  square = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ], 
  cbComputed (computed) {
    computed.__filled = function () {
      if (this.$attrs.outlined !== void 0 || this.$attrs.borderless !== void 0 || this.$attrs.standout !== void 0) {
        return false
      }
      return this.__getStyleProp(this.$attrs.filled, 'filled')
    }
    
    computed.__outlined = function () {
      if (this.$attrs.filled !== void 0 || this.$attrs.borderless !== void 0 || this.$attrs.standout !== void 0) {
        return false
      }
      return this.__getStyleProp(this.$attrs.outlined, 'outlined')
    }
    
    computed.__borderless = function () {
      if (this.$attrs.filled !== void 0 || this.$attrs.outlined !== void 0 || this.$attrs.standout !== void 0) {
        return false
      }
      return this.__getStyleProp(this.$attrs.borderless, 'borderless')
    }
    
    computed.__standout = function () {
      if (this.$attrs.filled != void 0 || this.$attrs.outlined !== void 0 || this.$attrs.borderless !== void 0) {
        return false
      }
      let standout = this.__getStyleProp(this.$attrs.standout, 'standout')
      if (standout === true) {
        let standoutClass = this.__getStyleProp(void 0, 'standoutClass')
        if (standoutClass) {
          standout = standoutClass
        }
      }
      return standout
    }

    computed.__standoutClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.standoutClass, 'standoutClass')
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let darkClass = this.__getStyleProp(this.$attrs.standoutDarkClass, 'standoutDarkClass')
        let lightClass = this.__getStyleProp(this.$attrs.standoutLightClass, 'standoutLightClass')
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
  }
})
export default state
export { Model, mixin }