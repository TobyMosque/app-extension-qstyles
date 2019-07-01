<template>
  <div class="q-pa-md">
    <q-ajax-bar ref="bar" position="bottom" color="accent" size="10px" skip-hijack />
    <q-btn color="primary" label="Trigger" @click="trigger" />
  </div>
</template>

<script>
export default {
  name: 'QAjaxBar',
  methods: {
    // we manually trigger it (this is not needed if we
    // don't skip Ajax calls hijacking)
    trigger () {
      const bar = this.$refs.bar
      console.log(bar.start)
      bar.start()

      this.timer = setTimeout(() => {
        console.log(this.$refs.bar)
        if (this.$refs.bar) {
          this.$refs.bar.stop()
        }
      }, Math.random() * 3000 + 1000)
    }
  }
}
</script>
