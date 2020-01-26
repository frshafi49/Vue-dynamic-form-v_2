<template>
  <div class="form-group">
    <b-form-group :label="email_field.label" :label-for="email_field.name">
      <b-form-input
        :id="email_field.name"
        v-model="val"
        @change="onInput"
        :type="email_field.type"
        :required="email_field.required"
        :placeholder="email_field.placeholder"
      ></b-form-input>
    </b-form-group>
  </div>
</template>

<script>
export default {
  props: {
    email_field: {
      type: Object
    },
    form_email: {
      type: String
    }
  },
  data() {
    return {
      val: ""
    };
  },
  mounted() {

    this.onProp(this.form_email);
    this.$watch("form_email", this.onProp);

  },
  methods: {
    onProp(value) {
      this.val = value;
    },

    onInput() {
      this.$emit("update:form_email", this.val);
    },
  }
};
</script>

<style scoped>
</style>