import Vue from 'vue'

export default function ({ Model, BaseModel, baseMixin, baseStates, methods, cbComputed }) {
  let instance = new Model()
  let state = Vue.observable(instance)

  let computed = {}
  let properties = Object.keys(instance)
  if (BaseModel) {
    let baseInstance = new BaseModel()
    let baseKeys = Object.keys(baseInstance)
    let classes = [ 'darkClass', 'lightClass' ]
    properties = properties.filter(key => baseKeys.indexOf(key) === -1 && classes.indexOf(key) === -1)
  }
  
  properties.forEach(key => {
    computed['__' + key] = function () {
      return this.__getStyleProp(this.$attrs[key], key)
    }
  })

  computed.__class = function () {
    let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
    let name = dark ? 'darkClass' : 'lightClass'
    let classes = []
    let $class = void 0
    
    $class = this.__getClassProp(state[name])
    if ($class !== void 0) {
      classes.unshift($class)
    }
      
    if (baseStates && baseStates.length > 0) {
      for (var i = 0; i < baseStates.length; i++) {
        $class = this.__getClassProp(baseStates[i][name])
        if ($class !== void 0) {
          classes.unshift($class)
        }
      }
    }

    if (classes.length <= 0) {
      return void 0
    }
    return classes.reduce((sum, cls) => {
      return Object.assign(sum, cls)
    }, {})
  }

  if (cbComputed) {
    cbComputed(computed)
  }

  let mixin = {}
  mixin.computed = computed
  if (baseMixin) {
    mixin.mixins =[ baseMixin ]
  }
  mixin.methods = methods || {}
  mixin.methods.__getClassProp = function ($class) {
    if (!$class)
      return void 0
    if (typeof $class === 'string')
      $class = $class.split(' ').filter(cls => !!cls.trim())
    if (Array.isArray($class)) {
      if ($class.length <= 0) {
        return void 0
      }
      $class = $class.reduce((obj, cls) => {
        obj[cls] = true
        return obj
      }, {})
    }
    if (Object.keys($class) <= 0) {
      void 0
    }
    return $class
  }
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
