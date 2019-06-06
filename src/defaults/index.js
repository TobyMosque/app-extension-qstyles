import Vue from 'vue'

let styleState = Vue.observable({
  color: undefined,
  bgColor: undefined,
  dark: true,
  filled: false,
  outlined: true,
  borderless: false,
  standout: false,
})

var styleMixin = {
  computed: {
    __color () {
      return this.color || styleState.color
    },
    __bgColor () {
      return this.bgColor || styleState.bgColor
    },
    __dark () {
      return this.dark || styleState.dark
    },
    __filled () {
      return this.filled || styleState.filled
    },
    __outlined () {
      return this.outlined || styleState.outlined
    },
    __borderless () {
      return this.borderless || styleState.borderless
    },
    __standout () {
      return this.standout || styleState.standout
    }
  }
}

export { styleState, styleMixin }