<template>
  <div class="q-pa-lg flex flex-center">
    <q-pagination
      v-model="current"
      :max="5"
    >
    </q-pagination>
  </div>
</template>

<script>
export default {
  name: 'QPaginationDemo',
  data () {
    return {
      current: 3
    }
  }
}
</script>
