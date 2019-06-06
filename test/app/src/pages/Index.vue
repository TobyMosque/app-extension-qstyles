<template>
  <q-page class="flex flex-center">
    <div style="width: 600px">
      <q-card flat bordered class="full-width q-mb-md">
        <q-card-section>
          <div class="text-h6">Settings</div>
        </q-card-section>
        <q-separator inset />
        <q-card-section class="q-gutter-md q-pb-md q-pr-md row">
          <q-checkbox v-model="dark" label="Dark" />
          <q-checkbox v-model="filled" label="Filled" />
          <q-checkbox v-model="outlined" label="Outlined" />
          <q-checkbox v-model="borderless" label="Borderless" />
          <q-checkbox v-model="standout" label="Standout" />
        </q-card-section>
      </q-card>
      <q-card flat bordered class="full-width q-mb-md" :class="{ 'bg-grey-10': dark }">
        <q-card-section>
          <div class="text-h6">Inputs</div>
        </q-card-section>
        <q-separator inset />
        <div class="row">
          <div class="col-6 q-pa-md">
            <q-field label="Standard" stack-label>
              <template v-slot:control>
                <div class="self-center full-width no-outline" tabindex="0">Field</div>
              </template>
            </q-field>
          </div>
          <div class="col-6 q-pa-md">
            <q-input v-model="text" label="input" />
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import { styleState } from 'quasar-app-extension-qstyles/src/styles/index'
export default {
  name: 'PageIndex',
  data () {
    return {
      text: '',
      dark: false,
      filled: false,
      outlined: false,
      borderless: false,
      standout: false
    }
  },
  watch: {
    dark () { styleState.dark = this.dark },
    filled () { styleState.filled = this.filled },
    outlined () { styleState.outlined = this.outlined },
    borderless () { styleState.borderless = this.borderless },
    standout () { styleState.standout = this.standout }
  }
}
</script>
