import StyleFactory from './StyleFactory'

class Model {
  color = undefined
  dark = undefined
  dense = undefined
  textColor = undefined
}

let { state, mixin } = StyleFactory(Model, undefined, undefined, [], {
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
}, undefined)
console.log(Model, state, mixin)
export { Model, state, mixin }