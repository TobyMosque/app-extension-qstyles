<template>
  <div class="q-pa-md">
    <q-btn-toggle
      v-model="model"
      toggle-color="primary"
      :options="[
        {label: 'One', value: 'one'},
        {label: 'Two', value: 'two'},
        {label: 'Three', value: 'three'}
      ]"
    />
  </div>
</template>

<script>
export default {
  name: 'QBtnToggleDemo',
  data () {
    return {
      model: null
    }
  }
}
</script>
