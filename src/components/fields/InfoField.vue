<template>
  <div>
    <span v-html="info_field.content"></span>
  </div>
</template>

<script>
export default {
  props: {
    // prop for receiving email field requirement
    info_field: {
      type: Object
    }
  }
};
</script>

<style scoped>
</style>