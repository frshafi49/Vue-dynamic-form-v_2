<template>
  <div class="container row">
    <div class="mt-4 col-md-6">
      <!-- Information field at first  -->
      <InfoField :info_field="formData[0]" />

      <!-- load form field based on type -->
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <div v-for="(field,i) in formData" v-bind:key="i">
          <div v-if="field.type=='text'">
            <TextField :text_field="field" :form_text.sync="inputData[field.label]" />
          </div>
          <div v-else-if="field.type=='email'">
            <EmailField :email_field="field" :form_email.sync="inputData[field.label]" />
          </div>
          <div v-else-if="field.type=='select'">
            <SingleSelectField
              :select_field="field"
              :form_single_select.sync="inputData[field.label]"
            />
          </div>
          <div v-else-if="field.type=='multi-select'">
            <MultipleSelectField
              :select_field="field"
              :form_multi_select.sync="inputData[field.label]"
            />
          </div>
          <div v-else-if="field.type=='radio'">
            <RadioField :radio_field="field" :form_radio.sync="inputData[field.label]" />
          </div>
        </div>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button class="ml-2" type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
    <div class="col-md-6">
      <b-card class="mt-3" header="Form Data Result">
        <pre class="m-0">{{ tableData }}</pre>
      </b-card>
    </div>
  </div>
</template>

<script>
import formData from "../assets/fields.json";
import TextField from "./fields/TextField";
import EmailField from "./fields/EmailField";
import RadioField from "./fields/RadioField";
import SingleSelectField from "./fields/SingleSelectField";
import MultipleSelectField from "./fields/MultipleSelectField";
import InfoField from "./fields/InfoField";

const defaultFormFields = {};
formData.fields.forEach(input => {
  defaultFormFields[input.label] = input.type === "multi-select" ? [] : "";
});

export default {
  components: {
    InfoField,
    TextField,
    EmailField,
    SingleSelectField,
    MultipleSelectField,
    RadioField
  },
  data() {
    return {
      formData: formData.fields,
      inputData: {
        ...defaultFormFields
      },
      tableData: [],
      show: true
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //   alert(JSON.stringify(this.inputData));
      this.tableData.push(this.inputData);
    },
    onReset(evt) {
      console.log("values", this.inputData);
      this.inputData = {
        ...defaultFormFields
      };
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style scoped>
</style>