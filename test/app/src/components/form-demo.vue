<template>
  <q-card flat bordered class="full-width q-mb-md" :class="{ 'bg-grey-10': basic.dark, 'text-white': basic.dark }">
    <q-card-section>
      <div class="text-h6">Form Components</div>
    </q-card-section>
    <q-separator inset />
    <q-tabs v-model="tab" align="justify" narrow-indicator >
      <q-tab name="demo" label="Demo" />
      <q-tab name="html" label="Html" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated :class="{ 'bg-grey-10': basic.dark, 'text-white': basic.dark }">
      <q-tab-panel name="demo">
        <div class="row">
          <div class="col-6 q-pa-md">
            <q-field label="Standard" stack-label />
          </div>
          <div class="col-6 q-pa-md">
            <q-input v-model="text" label="Input" />
          </div>
          <div class="col-6 q-pa-md">
            <q-select v-model="selected" :options="options" label="Select" ></q-select>
          </div>
          <div class="col-6 q-pa-md">
            <q-radio label="Yes" v-model="option" val="Yes" />
            <q-radio label="No" v-model="option" val="No" />
            <q-toggle label="Toggle" v-model="boolean" />
            <q-checkbox label="Checkbox" v-model="boolean" />
          </div>
          <div class="col-2 q-pa-md">
            <q-btn label="Button" class="full-width" />
          </div>
          <div class="col-2 q-pa-md">
            <q-btn-group class="full-width">
              <q-btn label="Btn A" />
              <q-btn label="Btn B" />
              <q-btn label="Btn C" />
            </q-btn-group>
          </div>
          <div class="col-2 q-pa-md">
            <q-btn-dropdown label="Dropdown Button" class="full-width">
              <q-list>
                <q-item v-for="opt in options" :key="opt" clickable v-close-popup>
                  <q-item-section>
                    <q-item-label>{{opt}}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-list>
            </q-btn-dropdown>
          </div>
          <div class="col-6 q-pa-md">
            <q-btn-toggle v-model="selected" :options="toggleOptions" class="full-width"/>
          </div>
          <div class="col-6 q-pa-md">
            <q-badge>
              Slider
            </q-badge>
            <q-slider v-model="slider" :min="0" :max="50"/>
          </div>
          <div class="col-6 q-pa-md">
            <q-badge>
              Range
            </q-badge>
            <q-range v-model="range" :min="0" :max="50"/>
          </div>
          <div class="col-4 q-pa-md">
            <q-option-group v-model="selected" :options="toggleOptions" />
          </div>
          <div class="col-4 q-pa-md">
            <q-date v-model="date" :events="events" />
          </div>
          <div class="col-4 q-pa-md">
            <q-time v-model="time" />
          </div>
        </div>
      </q-tab-panel>
      <q-tab-panel name="html">
        <q-markdown>
        {{html}}
        </q-markdown>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { state as basicState } from 'quasar-app-extension-qstyles/src/styles/basic'

export default {
  name: 'ComponentFormDemo',
  data () {
    return {
      text: '',
      slider: 25,
      range: { min: 10, max: 40 },
      boolean: true,
      events: ['2010/11/15'],
      date: '2010/11/17',
      time: '15:37',
      option: 'Yes',
      selected: 'Quasar Framework',
      options: [ 'Quasar Framework', 'Vue JS', 'Cordova', 'Electron', 'Webview', 'SSR + PWA' ],
      basic: basicState,
      tab: 'demo',
      html: `
\`\`\`html
<div class="row">
  <div class="col-6 q-pa-md">
    <q-field label="Standard" stack-label />
  </div>
  <div class="col-6 q-pa-md">
    <q-input v-model="text" label="input" />
  </div>
  <div class="col-6 q-pa-md">
    <q-select v-model="selected" :options="options" label="Select" />
  </div>
</div>
\`\`\`
      `
    }
  },
  computed: {
    toggleOptions () {
      return this.options.map(opt => ({ label: opt, value: opt }))
    }
  }
}
</script>

<style>
</style>
