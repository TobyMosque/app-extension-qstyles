import Vue from 'vue'
import { StyleClass, styleState, styleMixin } from 'quasar-app-extension-qstyles/src/styles/index.js'

class InputClass {
  hideBottomSpace = undefined
  rounded = undefined
  square = undefined
  dense = undefined
  inputClass = undefined
  inputStyle = undefined
}

let instance = new InputClass()
let inputState = Vue.observable({
  ...new StyleClass(),
  ...new InputClass()
})

let computed = {}
Object.keys(instance).forEach(key => {
  computed['__' + key] = function () {
    return this.__getStyleProp(this[key], key)
  }
})

var inputMixin = {
  mixins: [ styleMixin ],
  computed: computed,
  methods: {
    __getStyleProp (value, name) {
      return value || inputState[name] || styleState[name]
    }
  }
}

export { InputClass, inputState, inputMixin }