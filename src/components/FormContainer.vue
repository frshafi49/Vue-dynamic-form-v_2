<template>
  <div class="container-fluid row">
    <div class="mt-4 col-md-6">
      <!-- Information field at first  -->
      <InfoField :info_field="formData[0]" />
      <!-- load form field based on type -->
      <b-form @submit="onSubmit" @reset="onReset">
        <div v-for="(field,i) in formData" v-bind:key="i">
          <div v-if="field.type=='text'">
            <TextField
              :text_field="field"
              :form_text.sync="inputData[field.label]"
            />
          </div>
          <div v-else-if="field.type=='email'">
            <EmailField
              :email_field="field"
              :form_email.sync="inputData[field.label]"
            />
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

    <div class="col-md-6 mt-5">
      <table class="table table-sm table-bordered table-dark" v-if="tableData.length!=0">
        <thead>
          <tr>
            <th v-for="(head,i) in getTblHeader()" v-bind:key="i">{{head}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(body,i) in getTblBody()" v-bind:key="i">
            <td v-for="(data,j) in body" v-bind:key="j">{{data}}</td>
          </tr>
        </tbody>
      </table>
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

import tableMixins from "../mixins/tableMixins";


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
      submitDisabled: false,
    };
  },
  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      this.tableData.push(this.inputData);
      // disabled submit button
      // this.submitDisabled = true;
      // map inful field name
      this.inputData = {
        ...defaultFormFields
      };
    },
    onReset(evt) {
      // map inful field name
      this.inputData = {
        ...defaultFormFields
      };
      //enable submit button
      this.submitDisabled = false;
    },
    lahin(val) {
      console.log(val);
    }
  },
  mixins: [tableMixins]
};
</script>

<style scoped>
</style>