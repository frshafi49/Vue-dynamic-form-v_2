<template>
  <b-form-group id="input-group-2" :label="text_field.label" label-for="input-2">
    <b-form-input
      id="input-2"
      v-model="val"
      @change="onInput"
      :type="text_field.type"
      :required="text_field.required"
      :placeholder="text_field.placeholder"
    ></b-form-input>
  </b-form-group>
</template>

<script>
export default {
  props: {
    text_field: {
      type: Object
    },
    form_text: {
      type: String
    }
  },
  data() {
    return {
      val: ""
    };
  },
  mounted() {
    this.onProp(this.form_text);
    this.$watch("form_text", this.onProp);
  },
  methods: {
    onProp(value) {
      this.val = value;
    },
    onInput() {
      this.$emit("update:form_text", this.val);
    }
  }
};
</script>

<style scoped>
</style>