import QStyleFactory from './QStyleFactory'

class Model {
  color = void 0
  dark = void 0
  dense = void 0
  textColor = void 0

  darkClass = void 0
  lightClass = void 0
}

let { state, mixin } = QStyleFactory({ Model, 
  methods: {
    __getAttrs (self, state, attrs) {
      let classes = [ 'darkClass', 'lightClass' ]
      let stateKeys = Object.keys(state).filter(key => classes.indexOf(key) === -1)
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
  } 
})
export default state
export { Model, mixin }