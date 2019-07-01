<template>
  <q-page class="flex q-pa-md">
    <div class="full-width">
      <q-date-settings></q-date-settings>
      <q-card class="q-mb-md">
        <q-card-section>
          <div class="text-h6">Preview</div>
        </q-card-section>
        <q-separator></q-separator>
        <q-card-section>
          <div class="q-gutter-md row items-start">
            <q-date v-model="date" />
            <q-date v-model="date" minimal />
          </div>
          <q-date-demo v-if="false"></q-date-demo>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style>
</style>

<script>
import QDateDemo from '../components/components/QDate'
export default {
  name: 'QDatePage',
  data () {
    return {
      date: '2019/02/01'
    }
  },
  components: {
    'q-date-demo': QDateDemo
  }
}
</script>
