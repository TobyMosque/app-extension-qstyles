import StyleFactory from './StyleFactory'
import { Model as BaseModel, state as basicState, mixin as basicMixin } from 'quasar-app-extension-qstyles/src/styles/basic.js'

class Model extends BaseModel {
  bgColor = undefined
  filled = undefined
  outlined = undefined
  borderless = undefined
  standout = undefined
  standoutClass = undefined
  hideBottomSpace = undefined
  rounded = undefined
  square = undefined
}
let { state, mixin } = StyleFactory(Model, BaseModel, basicMixin, [ basicState ], {}, computed => {
  computed.__filled = function () {
    if (this.$attrs.outlined !== undefined || this.$attrs.borderless !== undefined || this.$attrs.standout !== undefined) {
      return false
    }
    return this.__getStyleProp(this.$attrs.filled, 'filled')
  }
  
  computed.__outlined = function () {
    if (this.$attrs.filled !== undefined || this.$attrs.borderless !== undefined || this.$attrs.standout !== undefined) {
      return false
    }
    return this.__getStyleProp(this.$attrs.outlined, 'outlined')
  }
  
  computed.__borderless = function () {
    if (this.$attrs.filled !== undefined || this.$attrs.outlined !== undefined || this.$attrs.standout !== undefined) {
      return false
    }
    return this.__getStyleProp(this.$attrs.borderless, 'borderless')
  }
  
  computed.__standout = function () {
    if (this.$attrs.filled != undefined || this.$attrs.outlined !== undefined || this.$attrs.borderless !== undefined) {
      return false
    }
    let standout = this.__getStyleProp(this.$attrs.standout, 'standout')
    if (standout === true) {
      let standoutClass = this.__getStyleProp(undefined, 'standoutClass')
      if (standoutClass) {
        standout = standoutClass
      }
    }
    return standout
  }
})
export { Model, state, mixin }