import Vue from 'vue'
import { inputState, inputMixin } from 'quasar-app-extension-qstyles/src/styles/input.js'

import {
  QInput
} from 'quasar'

export default function (ssrContext) {
  return Vue.extend({
    name: 'QInput',
    mixins: [ inputMixin ],
    props: {
      value: [String, Number]
    },
    computed: {
      __value: {
        get () { return this.value },
        set (value) {
          this.$emit('input', value)
        }
      }
    },
    render (h) {
      let self = this
      let attrs = self.__getAttrs(self, inputState, this.$attrs)
      let { input, ...listeners } = this.$listeners
      let { ...scopedSlots } = this.$scopedSlots
      let { value, ...props } = (this.$props || {})
      props.value = self.__value
      listeners.input = (value) => {
        self.__value = value
      }
      return h(QInput, {
        props: props,
        attrs: attrs,
        on: listeners,
        scopedSlots: scopedSlots
      })
    }
  })
}