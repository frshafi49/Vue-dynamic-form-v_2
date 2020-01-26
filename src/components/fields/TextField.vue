<template>
  <b-form-group :label="text_field.label" :label-for="text_field.name">
    <b-form-input
      :id="text_field.name"
      v-model="val"
      @change="onInput"
      :type="text_field.type"
      :required="text_field.required"
      :placeholder="text_field.placeholder"
    ></b-form-input>
    <div class="invalid-feedback">text_field.validation_message</div>
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