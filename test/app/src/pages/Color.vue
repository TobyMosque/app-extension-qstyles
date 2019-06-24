<template>
  <q-page class="flex q-pa-md">
    <div class="full-width">
      <q-card>
        <q-card-section>
          <div class="text-h6">Brand Colors</div>
        </q-card-section>
        <q-separator />
        <q-markup-table>
          <thead>
            <tr>
              <th>Original</th>
              <th>Preview</th>
              <th>Name</th>
              <th>Value</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="option in __options" :key="option.name">
              <td>
                <q-avatar :style="'background-color: ' + brands[option.value].color">
                </q-avatar>
              </td>
              <td>
                <q-avatar :style="'background-color: ' + option.color">
                </q-avatar>
              </td>
              <td>{{option.value}}</td>
              <td>
                <q-input v-model="option.color">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy :ref="'proxy-' + option.value" transition-show="scale" transition-hide="scale">
                        <q-color no-header v-model="option.color" @input="changeColor(option)" />
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </td>
              <td>
                <q-btn class="q-mr-md" round icon="undo" color="negative" @click="resetColor(option)"></q-btn>
                <q-btn class="q-mr-md" round icon="save" color="positive" @click="saveColor(option)"></q-btn>
              </td>
            </tr>
          </tbody>
        </q-markup-table>
        <q-card-actions >
          <q-btn color="warning" class="full-width" label="Reset Theme" @click="resetColors" />
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import colorService from '../services/colors'
export default {
  name: 'PageColor',
  data () {
    return {
      options: colorService.options,
      brands: colorService.brands
    }
  },
  beforeDestroy () {
    this.options.forEach(option => {
      option.color = this.brands[option.value].color
    })
  },
  computed: {
    __options () {
      return this.options.filter(option => {
        return option.brand
      })
    }
  },
  methods: {
    resetColor (option) {
      option.color = this.brands[option.value].color
    },
    saveColor (option) {
      colorService.setBrand(option.value, option.color)
    },
    changeColor (option) {
      // this.$refs['proxy-' + color.value][0].hide()
    },
    resetColors () {
      this.__options.forEach(option => {
        let brand = colorService.brands[option.value]
        colorService.setBrand(option.value, brand.default)
      })
    }
  }
}
</script>
