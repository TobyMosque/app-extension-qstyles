import Vue from 'vue'

export default function ({ ssrContext, name, component, state, mixin, props }) {
  let wrapper = {
    name: name,
    mixins: [ mixin ]
  }

  wrapper.props = props || {}
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
    let keys = Object.keys(component.options.methods)
    keys = keys.filter(key => !key.startsWith('__'))
    if (keys.length) {
      wrapper.methods = {}
      keys.forEach(methodName => {
        wrapper.methods[methodName] = function () {
          this.$refs.root[methodName].apply(this.$refs.root, arguments)
        }
      });
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