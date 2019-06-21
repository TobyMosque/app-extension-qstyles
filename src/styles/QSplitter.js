import QStyleFactory from './QStyleFactory'
import baseState, { Model as BaseModel, mixin as baseMixin } from 'quasar-app-extension-qstyles/src/styles/QStyle'

class Model extends BaseModel {
  beforeClass = void 0
  afterClass = void 0
  separatorStyle = void 0
  separatorClass = void 0
  separatorDarkClass = void 0
  separatorLightClass = void 0
}
let { state, mixin } = QStyleFactory({ Model, BaseModel, baseMixin, baseStates: [ baseState ],
  cbComputed (computed) {
    computed.__separatorClass = function () {
      let superClass = this.__getStyleProp(this.$attrs.separatorClass, 'separatorClass')
      if (!superClass) {
        let dark = this.__getStyleProp(this.$attrs.dark, 'dark')
        let lightClass = this.__getStyleProp(this.$attrs.contentLightClass, 'contentLightClass')
        let darkClass = this.__getStyleProp(this.$attrs.contentDarkClass, 'contentDarkClass')
        superClass = dark ? darkClass : lightClass
      }
      return superClass
    }
  }
})
export default state
export { Model, mixin }