<template>
  <div class="q-pa-lg">
    Radio
    <q-option-group
      v-model="group"
      :options="options"
    />
    Checkbox
    <q-option-group
      v-model="group"
      :options="options"
      type="checkbox"
    />
    Toggle
    <q-option-group
      v-model="group"
      :options="options"
      type="toggle"
    />
  </div>
</template>

<script>
export default {
  name: 'QOptionGroupDemo',
  data () {
    return {
      group: ['op1'],
      options: [
        {
          label: 'Option 1',
          value: 'op1'
        },
        {
          label: 'Option 2',
          value: 'op2'
        },
        {
          label: 'Option 3',
          value: 'op3'
        }
      ]
    }
  }
}
</script>
