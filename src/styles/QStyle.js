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
      let attrsKeys = Object.keys(attrs)
      let stateKeys = Object.keys(state)
        .filter(key => classes.indexOf(key) === -1)
        .reduce((names, camel) => {
          let dash = camel.replace(/([A-Z])/g, (g) => `-${g[0].toLowerCase()}`)
          names[dash] = camel
          return names 
        }, {})
      
      let __attrs = {}
      for (var dash in stateKeys) {
        let camel = stateKeys[dash]
        __attrs[dash] = self['__' + camel]
      }
      attrsKeys.forEach(dash => {
        if (stateKeys[dash]) {
          __attrs[dash] = attrs[dash]
        }
      })
      return __attrs
    }
  } 
})
export default state
export { Model, mixin }