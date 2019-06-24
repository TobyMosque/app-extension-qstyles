<template>
  <q-page class="flex q-pa-md">
    <div class="full-width">
      <q-card>
        <q-card-section>
          <div class="text-h6">Themer Export</div>
        </q-card-section>
        <q-separator />
        <q-card-section>
          Install the QStyles Extension
          <q-markdown :src="installExtMarkdown"></q-markdown>
          Generate a new boot using Quasar CLI:
          <q-markdown :src="createBootMarkdown"></q-markdown>
          Tell Quasar to use your new boot file. For this to happen you need to add the file in /quasar.conf.js
          <q-markdown :src="installBootMarkdown"></q-markdown>
          Register yout theme in your boot file.
          <q-markdown :src="importMarkdown"></q-markdown>
        </q-card-section>
        <q-card-actions >
          <q-btn color="warning" class="full-width" label="Reset Theme" @click="resetTheme" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import colorService from '../services/colors'
import * as themer from 'quasar-app-extension-qstyles/src/themer'

let modules = Object.keys(themer).map(moduleName => {
  // eslint-disable-next-line import/namespace
  return { name: moduleName, module: themer[moduleName] }
}).filter(item => {
  return item.name.startsWith('Q')
})

export default {
  name: 'PageColor',
  data () {
    return {
      modules: modules,
      options: colorService.options
    }
  },
  computed: {
    __options () {
      return this.options.filter(option => option.brand)
    },
    installExtMarkdown () {
      return `\`\`\`cmd\nquasar ext add qstyles\n\`\`\``
    },
    createBootMarkdown () {
      return `\`\`\`cmd\nquasar new boot styles\n\`\`\``
    },
    installBootMarkdown () {
      return `\`\`\`json\nboot: [\n  // references /src/boot/style.js\n  'style'\n]\n\`\`\``
    },
    importMarkdown () {
      let markdown = ''
      let brands = this.__options.map(option => {
        let brand = colorService.brands[option.value]
        return { name: option.value, color: brand.color, default: brand.default }
      }).filter(brand => {
        return brand.default !== brand.color
      })

      let states = this.modules.map(item => {
        let props = Object.keys(item.module).filter(prop => item.module[prop] !== void 0)
        return { name: item.name, module: item.module, props: props }
      }).filter(item => {
        return item.props && item.props.length
      })

      if (brands.length > 0) {
        markdown += `import { colors } from 'quasar'\n`
      }

      if (states && states.length > 0) {
        let imports = states.map(item => item.name).join(', ')
        markdown += `import { registerTheme, setTheme, ${imports} } from 'quasar-app-extension-qstyles/src/themer'\n`
      } else {
        markdown += `import { registerTheme, setTheme } from 'quasar-app-extension-qstyles/src/themer'\n`
      }

      let base64 = void 0
      if (brands.length > 0 || states.length > 0) {
        let serialized = {}
        if (brands.length > 0) {
          serialized.brands = []
          brands.forEach(brand => {
            serialized.brands.push([brand.name, brand.color])
          })
        }
        if (states.length > 0) {
          serialized.states = []
          states.forEach(state => {
            state.props.forEach(prop => {
              let value = state.module[prop]
              serialized.states.push([state.name, prop, value])
            })
          })
        }
        let json = JSON.stringify(serialized)
        base64 = Buffer.from(json).toString('base64')
      }

      if (base64) {
        markdown += `// do u wanna create your own theme? pls visit the follow link?\n`
        markdown += `// https://tobymosque.github.io/app-extension-qstyles/#/export?base64=${base64}\n`
      }

      markdown += `export default async ({ Vue, ssrContext }) => {\n`
      if (base64) {
        markdown += `  registerTheme('theme-name', () => {\n`
        if (brands.length > 0) {
          markdown += `    if (!ssrContext) {\n`
          brands.forEach(brand => {
            markdown += `      colors.setBrand('${brand.name}', '${brand.color}')\n`
          })
          markdown += `    }\n`
        }
        if (states && states.length > 0) {
          states.forEach(state => {
            state.props.forEach(prop => {
              let value = state.module[prop]
              if (typeof value === 'string') {
                value = `'${value}'`
              }
              markdown += `    ${state.name}.${prop} = ${value}\n`
            })
          })
        }
        markdown += `  })\n`
        markdown += `  setTheme('dark-outlined')\n`
      }
      markdown += `}\n`
      return `\`\`\`js\n${markdown}\n\`\`\``
    }
  },
  mounted () {
    if (this.$route.query && this.$route.query.base64) {
      let base64 = this.$route.query.base64
      let json = Buffer.from(base64, 'base64').toString()
      let options = JSON.parse(json)
      themer.reset()
      if (options.brands && options.brands.length > 0) {
        options.brands.forEach(([ name, color ]) => {
          colorService.setBrand(name, color)
        })
      }
      if (options.states && options.states.length > 0) {
        options.states.forEach(([ state, prop, value ]) => {
          // eslint-disable-next-line import/namespace
          themer[state][prop] = value
        })
      }
    }
  },
  methods: {
    resetTheme () {
      this.__options.forEach(option => {
        let brand = colorService.brands[option.value]
        colorService.setBrand(option.value, brand.default)
      })
      themer.reset()
    }
  }
}
</script>
