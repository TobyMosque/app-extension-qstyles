import { colors } from 'quasar'

class ColorService {
  brands = {
    primary: '',
    secondary: '',
    accent: '',
    positive: '',
    negative: '',
    info: '',
    warning: ''
  }
  colors = {}
  options = void 0
  async initialize (Vue) {
    let self = this
    let colorNames = [ 'red', 'pink', 'purple', 'deep-purple', 'indigo', 'blue', 'light-blue', 'cyan', 'teal', 'green', 'light-green', 'lime', 'yellow', 'amber', 'orange', 'deep-orange', 'brown', 'grey', 'blue-grey' ]
    let promises = []
    let options = []
    let brandNames = Object.keys(this.brands)
    for (let i = 0; i < brandNames.length; i++) {
      let brandName = brandNames[i]
      let color = this.getBrand(brandName)
      this.brands[brandName] = {}
      this.brands[brandName].default = this.brands[brandName].color = color
      options.push({ label: brandName, value: brandName, image: '', color: color, brand: true })
      let index = this.brands[brandName].index = options.length - 1
      let promise = self.createImage(this.brands[brandName].color).then((imageUrl) => {
        options[index].image = imageUrl
      })
      promises.push(promise)
    }

    await this.getComputed({
      async dbComputed ({ dom, computed }) {
        for (let i = 0; i < 15; i++) {
          for (let j = 0; j < colorNames.length; j++) {
            let name = colorNames[j]
            let colorName = name + (i ? '-' + i : '')
            let color = await self.getColor({ colorName, dom, computed })
            self.colors[colorName] = {}
            self.colors[colorName].default = self.colors[colorName].color = color
            options.push({ label: colorName, value: colorName, image: '', color: color, brand: false })
            let index = self.colors[colorName].index = options.length - 1
            let promise = self.createImage(self.colors[colorName].color).then((imageUrl) => {
              options[index].image = imageUrl
            })
            promises.push(promise)
          }
        }
      }
    })
    await Promise.all(promises)
    this.options = Vue.observable(options)
  }
  createImage (color) {
    return new Promise((resolve, reject) => {
      var canvas = document.createElement('canvas')
      canvas.width = 64
      canvas.height = 64
      var ctx = canvas.getContext('2d')
      ctx.fillStyle = color
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      canvas.toBlob(blob => {
        resolve(window.URL.createObjectURL(blob))
      }, reject)
    })
  }
  async getComputed ({ dom, computed, dbComputed }) {
    let hasDom = dom !== void 0
    if (!hasDom) {
      dom = document.createElement('div')
      document.body.appendChild(dom)
    }
    if (!computed) {
      computed = window.getComputedStyle(dom)
    }
    let response = await dbComputed({ dom, computed })
    if (!hasDom) {
      document.body.removeChild(dom)
    }
    return response
  }
  async getColor ({ colorName, dom, computed }) {
    let response = await this.getComputed({
      dom: dom,
      computed: computed,
      dbComputed ({ dom, computed }) {
        dom.classList.add('bg-' + colorName)
        let color = computed['background-color'] || ''
        dom.classList.remove('bg-' + colorName)
        if (color) {
          color = color.replace(/[^\d,]/g, '').split(',').map(color => parseInt(color))
          color = colors.rgbToHex({ r: color[0], g: color[1], b: color[2] })
        }
        return color
      }
    })
    return response
  }
  async setBrand (brandName, color) {
    if (this.brands[brandName].color !== color) {
      colors.setBrand(brandName, color)
      this.brands[brandName].color = color

      let index = this.brands[brandName].index
      URL.revokeObjectURL(this.options[index].image)
      let imageUrl = await this.createImage(this.brands[brandName].color)
      this.options[index].image = imageUrl
      this.options[index].color = color
    }
  }
  getBrand (brandName) {
    return colors.getBrand(brandName)
  }
}

export default new ColorService()
