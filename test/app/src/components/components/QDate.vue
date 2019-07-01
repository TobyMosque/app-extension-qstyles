<template>
  <div class="q-gutter-md row items-start">
    <q-date v-model="date" />
    <q-date v-model="date" minimal />
  </div>
</template>

<script>
export default {
  name: 'QDate',
  data () {
    return {
      date: '2019/02/01'
    }
  }
}
</script>
