import colorServices from '../services/colors'

export default {
  name: 'QSelectColor',
  props: {
    value: { required: true }
  },
  data () {
    return {
      filter: '',
      options: colorServices.options
    }
  },
  computed: {
    __options () {
      if (!this.filter) {
        return this.options
      } else {
        const needle = this.filter.toLowerCase()
        return this.options.filter(item => item.value.toLowerCase().indexOf(needle) !== -1)
      }
    },
    __value: {
      get () { return this.value },
      set (value) { this.$emit('input', value) }
    }
  },
  methods: {
    filterFn (val, update) {
      update(() => {
        this.filter = val
      })
    }
  },
  render (h) {
    let self = this
    let { value, ...props } = this.$props || {}
    let { useInput, clearable, options, ...attrs } = this.$attrs || {}
    let { input, filter, ...listeners } = this.$listeners || {}
    let { ...scopedSlots } = this.$scopedSlots || {}

    attrs.useInput = true
    attrs.clearable = true
    attrs.options = self.__options
    props.value = self.__value
    listeners.input = (option) => {
      self.__value = option ? option.value : void 0
    }

    listeners.filter = (val, update) => {
      self.filterFn(val, update)
    }

    scopedSlots.option = (props) => {
      return h('q-item', {
        attrs: props.itemProps,
        on: props.itemEvents
      }, [
        h('q-item-section', {
          attrs: { avatar: true }
        }, [
          h('q-avatar', {}, [
            h('img', {
              attrs: { src: props.opt.image }
            }, [])
          ])
        ]),
        h('q-item-section', {}, [
          h('q-item-label', {}, props.opt.label)
        ])
      ])
    }

    scopedSlots.selected = () => {
      let meta = colorServices.brands[self.__value] || colorServices.colors[self.__value]
      if (!meta) {
        return h('div', {}, '')
      } else {
        let option = self.options[meta.index]
        return h('q-item', {}, [
          h('q-item-section', {
            attrs: { avatar: true }
          }, [
            h('q-avatar', {}, [
              h('img', {
                attrs: { src: option.image }
              }, [])
            ])
          ]),
          h('q-item-section', {}, [
            h('q-item-label', {}, option.value)
          ])
        ])
      }
    }

    return h('q-select', {
      attrs: attrs,
      props: props,
      on: listeners,
      scopedSlots: scopedSlots
    })
  }
}
