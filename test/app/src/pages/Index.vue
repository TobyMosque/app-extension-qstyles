<template>
  <q-page class="flex q-pa-md">
    <div class="full-width">
      <field-settings />
      <form-demo />
      <field-override-demo />
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import ComponentFieldSettings from '../components/field-settings'
import ComponentFormDemo from '../components/form-demo'
import ComponentFieldOverrideDemo from '../components/field-override-demo'

export default {
  name: 'PageIndex',
  components: {
    'field-settings': ComponentFieldSettings,
    'form-demo': ComponentFormDemo,
    'field-override-demo': ComponentFieldOverrideDemo
  },
  data () {
    return {}
  }
}
</script>
