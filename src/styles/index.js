import Vue from 'vue'

class StyleClass {
  color = undefined
  bgColor = undefined
  dark = undefined
  filled = undefined
  outlined = undefined
  borderless = undefined
  standout = undefined
  standoutClass = undefined
}

let instance = new StyleClass()
let styleState = Vue.observable({
  ...new StyleClass()
})

let computed = {}
Object.keys(instance).forEach(key => {
  computed['__' + key] = function () {
    return this.__getStyleProp(this[key], key)
  }
})

var styleMixin = {
  computed: computed,
  methods: {
    __getStyleProp (value, name) {
      return value || styleState[name]
    },
    __getProps (state, props) {
      let propsKeys = Object.keys(props)
      let stateKeys = Object.keys(state)
      let __props = {}
      stateKeys.forEach(key => {
        __props[key] = this['__' + key]
      })
      propsKeys.forEach(key => {
        if (!state[key] && key != 'value') {
          __props[key] = props[key]
        }
      })
      return __props
    }
  }
}

export { StyleClass, styleState, styleMixin }