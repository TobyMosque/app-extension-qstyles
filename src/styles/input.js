import Vue from 'vue'
import { FieldProps, fieldState, fieldMixin } from 'quasar-app-extension-qstyles/src/styles/field.js'

class InputProps {
  inputClass = undefined
  inputStyle = undefined
}

let instance = new InputProps()
let inputState = Vue.observable({
  ...new FieldProps(),
  ...new InputProps()
})

let computed = {}
Object.keys(instance).forEach(key => {
  computed['__' + key] = function () {
    return this.__getStyleProp(this.$attrs[key], key)
  }
})

var inputMixin = {
  mixins: [ fieldMixin ],
  computed: computed,
  methods: {
    __getStyleProp (value, name) {
      return value || inputState[name] || fieldState[name]
    }
  }
}

export { FieldProps, inputState, inputMixin }