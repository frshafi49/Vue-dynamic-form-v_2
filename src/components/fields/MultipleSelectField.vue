<template>
  <b-form-group id="input-group-3" :label="select_field.label" label-for="input-3">
    <b-form-select
      id="input-3"
      v-model="val"
      @change="onInput"
      multiple
      :options="select_field.options[0]"
      :required="select_field.required"
    ></b-form-select>
  </b-form-group>
</template>

<script>
export default {
  props: {
    select_field: {
      type: Object
    },
    form_multi_select: {
      type: Array
    }
  },
  data() {
    return {
      val: []
    };
  },
  mounted() {
    this.onProp(this.form_multi_select);
    this.$watch("form_multi_select", this.onProp);
  },
  methods: {
    onProp(value) {
      this.val = value;
    },
    onInput() {
      this.$emit("update:form_multi_select", this.val);
    }
  }
};
</script>

<style scoped>
</style>