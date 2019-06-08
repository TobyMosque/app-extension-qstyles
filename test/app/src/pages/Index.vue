<template>
  <q-page class="flex q-pa-md">
    <div class="full-width">
      <q-card flat bordered class="full-width q-mb-md" :class="{ 'bg-grey-10': field.dark }">
        <q-card-section>
          <div class="text-h6" :class="{ 'text-white': field.dark }">Field Settings</div>
        </q-card-section>
        <q-separator inset />
        <q-tabs v-model="fieldSettingsTab" align="justify" narrow-indicator >
          <q-tab name="settings" label="Settings" />
          <q-tab name="html" label="Html" />
          <q-tab name="code" label="Code" />
        </q-tabs>
        <q-tab-panels v-model="fieldSettingsTab" animated>
          <q-tab-panel name="settings">
            <div class="row">
              <div class="col-4 q-pa-md">
                <q-input v-model="field.color" label="Color" />
              </div>
              <div class="col-4 q-pa-md">
                <q-input v-model="field.bgColor" label="BG Color" />
              </div>
              <div class="col-4 q-pa-md">
                <q-input v-model="field.standoutClass" label="Standout Class" />
              </div>
              <div class="col-12 q-pa-md q-gutter-md">
                <q-checkbox v-model="field.dark" label="Dark" />
                <q-checkbox v-model="field.filled" label="Filled" />
                <q-checkbox v-model="field.outlined" label="Outlined" />
                <q-checkbox v-model="field.borderless" label="Borderless" />
                <q-checkbox v-model="field.standout" label="Standout" />
                <q-checkbox v-model="field.hideBottomSpace" label="Hide Bottom Space" />
                <q-checkbox v-model="field.rounded" label="Rounded" />
                <q-checkbox v-model="field.square" label="Square" />
                <q-checkbox v-model="field.dense" label="Dense" />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="html">
            <q-markdown>
            {{fieldSettingsHtml}}
            </q-markdown>
          </q-tab-panel>
          <q-tab-panel name="code">
            <q-markdown>
            {{fieldSettingsCode}}
            </q-markdown>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <q-card flat bordered class="full-width q-mb-md" :class="{ 'bg-grey-10': field.dark }">
        <q-card-section>
          <div class="text-h6" :class="{ 'text-white': field.dark }">Form Components</div>
        </q-card-section>
        <q-separator inset />
        <q-tabs v-model="formTab" align="justify" narrow-indicator >
          <q-tab name="demo" label="Demo" />
          <q-tab name="html" label="Html" />
        </q-tabs>
        <q-tab-panels v-model="formTab" animated>
          <q-tab-panel name="demo">
            <div class="row">
              <div class="col-6 q-pa-md">
                <q-field label="Standard" stack-label />
              </div>
              <div class="col-6 q-pa-md">
                <q-input v-model="text" label="input" />
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="html">
            <q-markdown>
            {{formHtml}}
            </q-markdown>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
      <q-card flat bordered class="full-width q-mb-md" :class="{ 'bg-grey-10': field.dark }">
        <q-card-section>
          <div class="text-h6" :class="{ 'text-white': field.dark }">Fields - Override Defaults</div>
        </q-card-section>
        <q-separator inset />
        <q-tabs v-model="fieldTab" align="justify" narrow-indicator >
          <q-tab name="demo" label="Demo" />
          <q-tab name="html" label="Html" />
        </q-tabs>
        <q-tab-panels v-model="fieldTab" animated>
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
            {{fieldHtml}}
            </q-markdown>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { fieldState } from 'quasar-app-extension-qstyles/src/styles/field'

export default {
  name: 'PageIndex',
  data () {
    return {
      text: '',
      field: fieldState,
      fieldSettingsTab: 'settings',
      fieldSettingsHtml: `
\`\`\`html
<div class="row">
  <div class="col-4 q-pa-md">
    <q-input v-model="field.color" label="Color" />
  </div>
  <div class="col-4 q-pa-md">
    <q-input v-model="field.bgColor" label="BG Color" />
  </div>
  <div class="col-4 q-pa-md">
    <q-input v-model="field.standoutClass" label="Standout Class" />
  </div>
  <div class="col-12 q-pa-md q-gutter-md">
    <q-checkbox v-model="field.dark" label="Dark" />
    <q-checkbox v-model="field.filled" label="Filled" />
    <q-checkbox v-model="field.outlined" label="Outlined" />
    <q-checkbox v-model="field.borderless" label="Borderless" />
    <q-checkbox v-model="field.standout" label="Standout" />
    <q-checkbox v-model="field.hideBottomSpace" label="Hide Bottom Space" />
    <q-checkbox v-model="field.rounded" label="Rounded" />
    <q-checkbox v-model="field.square" label="Square" />
    <q-checkbox v-model="field.dense" label="Dense" />
  </div>
</div>
\`\`\`
      `,
      fieldSettingsCode: `
\`\`\`js
import { fieldState } from 'quasar-app-extension-qstyles/src/styles/field'

export default {
name: 'PageIndex',
  data () {
    return {
      field: fieldState,
    }
  }
}
\`\`\`
      `,
      formTab: 'demo',
      formHtml: `
\`\`\`html
<div class="row">
  <div class="col-6 q-pa-md">
    <q-field label="Standard" stack-label />
  </div>
  <div class="col-6 q-pa-md">
    <q-input v-model="text" label="input" />
  </div>
</div>
\`\`\`
      `,
      fieldTab: 'demo',
      fieldHtml: `
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
