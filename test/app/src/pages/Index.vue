<template>
  <q-page class="flex flex-center bg-grey-10">
    <q-input v-model="text" label="input" />
  </q-page>
</template>

<style>
</style>

<script>
import { styleState } from 'quasar-app-extension-qstyles/src/defaults/index'
export default {
  name: 'PageIndex',
  data () {
    return { text: '' }
  },
  mounted () {
    window.setTimeout(function () {
      styleState.outlined = false
      styleState.filled = true
      styleState.color = 'negative'
    }, 2000)
  }
}
</script>
