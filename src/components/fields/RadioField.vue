<template>
  <b-form-group :label="radio_field.label">
    <div v-for="(rf,i) in Object.values(radio_field.options[0])" v-bind:key="i">
      <b-form-radio
        v-model="val"
        @change.native="onInput"
        :required="radio_field.required"
        :name="toString(i)"
        :value="rf"
      >{{rf}}</b-form-radio>
    </div>
    <div class="invalid-feedback">radio_field.validation_message</div>
  </b-form-group>
</template>

<script>
export default {
  props: {
    radio_field: {
      type: Object
    },
    form_radio: {
      type: String
    }
  },
  data() {
    return {
      val: ""
    };
  },
  mounted() {
    this.onProp(this.form_radio);
    this.$watch("form_radio", this.onProp);
  },
  methods: {
    onProp(value) {
      this.val = value;
    },

    onInput() {
      this.$emit("update:form_radio", this.val);
    }
  }
};
</script>

<style>
</style>