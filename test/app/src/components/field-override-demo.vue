<template>
  <q-card flat bordered class="full-width q-mb-md" :class="{ 'bg-grey-10': basic.dark, 'text-white': basic.dark }">
    <q-card-section>
      <div class="text-h6">Fields - Override Defaults</div>
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
            <q-field :filled="false" :outlined="false" :borderless="false" :standout="false" label="Standard Field" />
          </div>
          <div class="col-6 q-pa-md">
            <q-field filled label="Filled Field" />
          </div>
          <div class="col-6 q-pa-md">
            <q-field outlined label="Outlined Field" />
          </div>
          <div class="col-6 q-pa-md">
            <q-field borderless label="Borderless Field" />
          </div>
          <div class="col-6 q-pa-md">
            <q-field standout label="Standout Field" />
          </div>
          <div class="col-6 q-pa-md">
            <q-field rounded :square="false" label="Rounded Field" />
          </div>
          <div class="col-6 q-pa-md">
            <q-field square label="Square Field" />
          </div>
          <div class="col-6 q-pa-md">
            <q-field dense label="Dense Field" />
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
  name: 'ComponentFieldOverrideDemo',
  data () {
    return {
      basic: basicState,
      tab: 'demo',
      html: `
\`\`\`html 
<div class="row">
  <div class="col-6 q-pa-md">
    <q-field :filled="false" :outlined="false" :borderless="false" :standout="false" label="Standard Field" />
  </div>
  <div class="col-6 q-pa-md">
    <q-field filled label="Filled Field" />
  </div>
  <div class="col-6 q-pa-md">
    <q-field outlined label="Outlined Field" />
  </div>
  <div class="col-6 q-pa-md">
    <q-field borderless label="Borderless Field" />
  </div>
  <div class="col-6 q-pa-md">
    <q-field standout label="Standout Field" />
  </div>
  <div class="col-6 q-pa-md">
    <q-field rounded :square="false" label="Rounded Field" />
  </div>
  <div class="col-6 q-pa-md">
    <q-field square label="Square Field" />
  </div>
  <div class="col-6 q-pa-md">
    <q-field dense label="Dense Field" />
  </div>
</div>
\`\`\`
      `
    }
  }
}
</script>

<style>
</style>
