import Vue from 'vue'
import { StyleClass, styleState, styleMixin } from 'quasar-app-extension-qstyles/src/styles/index.js'

class FieldClass { }

let instance = new FieldClass()
let fieldState = Vue.observable({
  ...new StyleClass(),
  ...new FieldClass()
})

let computed = {}
Object.keys(instance).forEach(key => {
  computed['__' + key] = function () {
    return this.__getStyleProp(this[key], key)
  }
})

var fieldMixin = {
  mixins: [ styleMixin ],
  computed: computed,
  methods: {
    __getStyleProp (value, name) {
      return value || fieldState[name] || styleState[name]
    }
  }
}

export { FieldClass, fieldState, fieldMixin }