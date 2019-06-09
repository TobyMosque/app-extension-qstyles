import Vue from 'vue'

export default function (ssrContext, name, component, state, mixin, valueProp) {
  let wrapper = {
    name: name,
    mixins: [ mixin ],
  }

  if (valueProp) {
    wrapper.props = { value: valueProp }
    wrapper.computed = {
      __value: {
        get () { return this.value },
        set (value) {
          this.$emit('input', value)
        }
      }
    }
  }

  wrapper.render = function (h) {
    let self = this
    let attrs = self.__getAttrs(self, state, this.$attrs)
    let { ...scopedSlots } = this.$scopedSlots
    if (valueProp) {
      let { input, ...listeners } = this.$listeners
      let { value, ...props } = this.$props || {}
      props.value = self.__value
      listeners.input = (value) => {
        self.__value = value
      }
      return h(component, {
        props: props,
        attrs: attrs,
        on: listeners,
        scopedSlots: scopedSlots
      })
    } else {
      let { ...listeners } = this.$listeners
      let { ...props } = this.$props || {}
      return h(component, {
        props: props,
        attrs: attrs,
        on: listeners,
        scopedSlots: scopedSlots
      })
    }
  }

  return Vue.extend(wrapper)
}