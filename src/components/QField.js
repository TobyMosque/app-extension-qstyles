import Vue from 'vue'
import { fieldState, fieldMixin } from 'quasar-app-extension-qstyles/src/styles/field.js'

import {
  QField
} from 'quasar'

export default function (ssrContext) {
  return Vue.extend({
    name: 'QField',
    mixins: [ fieldMixin ],
    render (h) {
      let self = this
      let { ...attrs } = this.$attrs
      let { ...listeners } = this.$listeners
      let { ...scopedSlots } = this.$scopedSlots
      let props = self.__getProps(fieldState, this.$props || {})
      return h(QField, {
        props: props,
        attrs: attrs,
        on: listeners,
        scopedSlots: scopedSlots
      })
    }
  })
}