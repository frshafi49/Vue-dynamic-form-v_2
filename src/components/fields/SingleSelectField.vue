<template>
  <b-form-group :id="select_field.name" :label="select_field.label" :label-for="select_field.name">
    <b-form-select
      :id="select_field.name"
      v-model="val"
      @change="onInput"
      :options="setOPtionWithChoose()"
      :required="select_field.required"
    ></b-form-select>
    <div class="invalid-feedback">select_field.validation_message</div>
  </b-form-group>
</template>

<script>

import selectMixin from '../../mixins/selectMixin';

export default {
  props: {
    select_field: {
      type: Object
    },
    form_single_select: {
      type: String
    }
  },
  data() {
    return {
      val: ''
    };
  },
  mounted() {
    this.onProp(this.form_single_select);
    this.$watch("form_single_select", this.onProp);
  },
  methods: {
    onProp(value) {
      this.val = value;
    },
    onInput() {
      this.$emit("update:form_single_select", this.val);
    }
  },
  mixins:[selectMixin]

};
</script>

<style scoped>
</style>