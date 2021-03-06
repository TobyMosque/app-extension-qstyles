import Vue from 'vue'

export default function ({ ssrContext, name, component, state, mixin }) {
  let wrapper = {
    name: name,
    mixins: [ mixin ]
  }

  wrapper.props = {}
  wrapper.mounted = function () {
    // let emit = {
    //   root: this.$refs.root.$emit,
    //   self: this.$emit
    // }
    // this.$on = (...args) => {
    //   emit.root.apply(this, args)
    // }
    // this.$refs.root.$emit = (...args) => {
    //   emit.self.apply(this, args)
    // }
  }
  if (component.options.props) {
    let propKeys = Object.keys(component.options.props)
    let stateKeys = Object.keys(state)
    let props = propKeys.filter(key => stateKeys.indexOf(key) === -1)
    let others = propKeys.filter(key => stateKeys.indexOf(key) !== -1).reduce((others, key) => {
      others[key] = component.options.props[key]
      return others
    }, {})
    
    for (let index in props) {
      let name = props[index]
      let original = component.options.props[name]
      let isObject = original != null && original.constructor.name === 'Object'
      let prop
      if (isObject) {
        if (name === 'value') {
          let { ...values } = original
          prop = values
        } else {
          let { default: _default, validator, ...values } = original
          prop = values
        }
      } else {
        prop = original
      }
      wrapper.props[name] = prop
    }
  }
  
  if (wrapper.props.value) {
    wrapper.computed = {
      __value: {
        get () { return this.value },
        set (value) {
          this.$emit('input', value)
        }
      }
    }
  }

  if (component.options.methods) {
    wrapper.methods = {}
    for (let key in component.options.methods) {
      let methodName = key
      wrapper.methods[methodName] = function () {
        this.$refs.root[methodName].apply(this.$refs.root, arguments)
      }
    }
  }

  wrapper.render = function (h) {
    let self = this
    let attrs = self.__getAttrs(self, state, this.$attrs)
    let { ...scopedSlots } = this.$scopedSlots
    let classes = this.__class
    let options = {
      ref: 'root',
      key: this.$vnode.key,
      attrs: attrs,
      class: classes,
      scopedSlots: scopedSlots
    }
    if (wrapper.props.value) {
      let { input, ...listeners } = this.$listeners
      let { value, ...qProps } = this.$props || {}
      qProps.value = self.__value
      listeners.input = (value) => {
        self.__value = value
      }
      options.props = qProps
      options.on = listeners
    } else {
      let { ...listeners } = this.$listeners
      let { ...qProps } = this.$props || {}
      options.props = qProps
      options.on = listeners
    }
    return h(component, options)
  }

  return Vue.extend(wrapper)
}