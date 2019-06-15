import Vue from 'vue'

export default function ({ Model, BaseModel, baseMixin, baseStates, methods, cbComputed }) {
  let instance = new Model()
  let state = Vue.observable(instance)

  let computed = {}
  let properties = Object.keys(instance)
  if (BaseModel) {
    let baseInstance = new BaseModel()
    let baseKeys = Object.keys(baseInstance)
    properties = properties.filter(key => baseKeys.indexOf(key) === -1)
  }
  
  properties.forEach(key => {
    computed['__' + key] = function () {
      return this.__getStyleProp(this.$attrs[key], key)
    }
  })

  if (cbComputed) {
    cbComputed(computed)
  }

  let mixin = {}
  mixin.computed = computed
  if (baseMixin) {
    mixin.mixins =[ baseMixin ]
  }
  mixin.methods = methods || {}
  mixin.methods.__getStyleProp = function (value, name) {
    if (value !== void 0)
      return value
    if (state[name] !== void 0)
      return state[name]
    if (!baseStates || baseStates.length <= 0)
      return void 0
    for (var i = 0; i < baseStates.length; i++) {
      let baseState = baseStates[i]
      if (baseState[name] !== void 0)
        return baseState[name]
    }
    return void 0
  }
  return { state, mixin }
}
