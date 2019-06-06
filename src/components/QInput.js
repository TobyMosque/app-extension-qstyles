import Vue from 'vue'
import { styleMixin } from 'quasar-app-extension-qstyles/src/defaults/index.js'

import {
  QInput
} from 'quasar'

export default function (ssrContext) {
  return Vue.extend({
    name: 'QInput',
    mixins: [ styleMixin ],
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
      let { value, color, bgColor, dark, filled, outlined, borderless, standout, ...props } = this.$props
      props.value = self.__value
      props.color = self.__color
      props.bgColor = self.__bgColor
      props.dark = self.__dark
      props.filled = self.__filled
      props.outlined = self.__outlined
      props.borderless = self.__borderless
      props.standout = self.__standout
      listeners.input = (value) => {
        self.__value = value
      }
      console.log({
        props: props,
        attrs: attrs,
        on: listeners,
        label: attrs.label
      })
      return h(QInput, {
        props: props,
        attrs: attrs,
        on: listeners,
      })
    }
  })
}