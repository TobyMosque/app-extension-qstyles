import Vue from 'vue'

class Model {
  light = void 0
  dark = void 0
}

let state = Vue.observable(new Model())
export default state
export { Model }