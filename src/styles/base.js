import StyleFactory from './StyleFactory'

class Model {
  color = void 0
  dark = void 0
  dense = void 0
  textColor = void 0
}

let { state, mixin } = StyleFactory({ Model, methods: {
  __getAttrs (self, state, attrs) {
    let stateKeys = Object.keys(state)
    let attrsKeys = Object.keys(attrs)
    
    let __attrs = {}
    stateKeys.forEach(key => {
      __attrs[key] = self['__' + key]
    })
    attrsKeys.forEach(key => {
      if (stateKeys.indexOf(key) === -1) {
        __attrs[key] = attrs[key]
      }
    })
    return __attrs
  }
} })
export default state
export { Model, mixin }