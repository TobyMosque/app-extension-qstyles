import Vue from 'vue'

class FieldProps {
  color = undefined
  bgColor = undefined
  dark = undefined
  filled = undefined
  outlined = undefined
  borderless = undefined
  standout = undefined
  standoutClass = undefined
  hideBottomSpace = undefined
  rounded = undefined
  square = undefined
  dense = undefined
}

let instance = new FieldProps()
let fieldState = Vue.observable({
  ...new FieldProps()
})

let computed = {}
Object.keys(instance).forEach(key => {
  computed['__' + key] = function () {
    return this.__getStyleProp(this.$attrs[key], key)
  }
})

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

var fieldMixin = {
  computed: computed,
  methods: {
    __getStyleProp (value, name) {
      return value === undefined ?  fieldState[name] : value
    },
    __getAttrs (self, state, attrs) {
      let stateKeys = Object.keys(state)
      let attrsKeys = Object.keys(attrs)
      
      let __attrs = {}
      stateKeys.forEach(key => {
        __attrs[key] = self['__' + key]
      })
      attrsKeys.forEach(key => {
        if (stateKeys.indexOf(key) === -1) {
          __attrs[key] = attrs[key]
        }
      })
      return __attrs
    }
  }
}

export { FieldProps, fieldState, fieldMixin }