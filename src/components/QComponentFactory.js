import Vue from 'vue'

export default function ({ ssrContext, name, component, state, mixin }) {
  let wrapper = {
    name: name,
    mixins: [ mixin ]
  }

  wrapper.props = {}
  if (component.options.props) {
    let propKeys = Object.keys(component.options.props)
    let stateKeys = Object.keys(state)
    let props = propKeys.filter(key => stateKeys.indexOf(key) === -1)
    
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
        if (['QMenu', 'QPopupProxy', 'QTooltip'].indexOf(name) !== -1) {
          console.log(name, methodName, arguments)
        }
        this.$refs.root[methodName].apply(this.$refs.root, arguments)
      }
    }
  }

  wrapper.render = function (h) {
    let self = this
    let attrs = self.__getAttrs(self, state, this.$attrs)
    let { ...scopedSlots } = this.$scopedSlots
    let classes = this.__class
    if (wrapper.props.value) {
      let { input, ...listeners } = this.$listeners
      let { value, ...qProps } = this.$props || {}
      qProps.value = self.__value
      listeners.input = (value) => {
        self.__value = value
      }
      return h(component, {
        ref: 'root',
        props: qProps,
        attrs: attrs,
        class: classes,
        on: listeners,
        scopedSlots: scopedSlots
      })
    } else {
      let { ...listeners } = this.$listeners
      let { ...qProps } = this.$props || {}
      return h(component, {
        ref: 'root',
        props: qProps,
        attrs: attrs,
        class: classes,
        on: listeners,
        scopedSlots: scopedSlots
      })
    }
  }

  return Vue.extend(wrapper)
}