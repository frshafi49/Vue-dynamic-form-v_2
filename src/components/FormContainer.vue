<template>
  <div class="container-fluid row">
    <div class="mt-4 col-md-6">
      <!-- Information field at first  -->
      <InfoField :info_field="formData[0]" />

      <!-- load form field based on type -->
      <b-form @submit="onSubmit" @reset="onReset">
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

        <b-button :disabled="submitDisabled" type="submit" variant="primary">Submit</b-button>
        <b-button class="ml-2" type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
    <div v-if="tableData.length>0" class="col-md-6 mt-5">
      <b-table
        :head-variant="'dark'"
        :table-variant="'info'"
        :small="true"
        :bordered="true"
        :responsive="true"
        :items="tableData"
        caption-top
      >
        <template v-slot:table-caption>Form data submission table</template>
      </b-table>
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
let i = 0;
formData.fields.forEach(input => {
  if (i > 0)
    defaultFormFields[input.label] = input.type === "multi-select" ? [] : "";
  i++;
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
      submitDisabled: false
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.tableData.push(this.inputData);
      // disabled submit button
      this.submitDisabled = true;
    },
    onReset(evt) {
      // map inful field name
      this.inputData = {
        ...defaultFormFields
      };
      //enable submit button
      this.submitDisabled = false;
    }
  }
};
</script>

<style scoped>
</style>