<template>
  <div class="q-pa-md row items-start q-gutter-md">
    {{lorem}}
  </div>
</template>

<script>
export default {
  name: 'QCard',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  }
}
</script>
