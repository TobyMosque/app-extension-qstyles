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
        set (value) { this.$input('input', value) }
      }
    },
    render (h) {
      let self = this
      let { ...attrs } = this.$attrs
      let { input, ...listeners } = this.$listeners
      let { ...scopedSlots } = this.$scopedSlots
      let props = self.__getProps(inputState, this.$props || {})
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