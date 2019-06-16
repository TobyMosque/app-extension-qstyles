<template>
  <q-card class="full-width q-mb-md">
    <q-card-section>
      <div class="text-h6">Fields - Override Defaults</div>
    </q-card-section>
    <q-separator inset />
    <q-tabs v-model="tab" align="justify" narrow-indicator >
      <q-tab name="demo" label="Demo" />
      <q-tab name="html" label="Html" />
    </q-tabs>
    <q-tab-panels v-model="tab" animated :class="QStyle.dark ? QTheme.dark : QTheme.light">
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
        <q-markdown :src="html"></q-markdown>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</template>

<script>
import { QStyle, QTheme } from 'quasar-app-extension-qstyles/src/themer'
import html from './field-override-demo.html.md'

export default {
  name: 'ComponentFieldOverrideDemo',
  data () {
    return {
      QTheme: QTheme,
      QStyle: QStyle,
      tab: 'demo',
      html: html
    }
  }
}
</script>

<style>
</style>
