export default {

    methods: {
        setOPtionWithChoose:function(){
            let options = [];
            let firstValue = { "value": '', "text": 'Please select an option' };
            options.push(firstValue);
            for (let [key, val] of Object.entries(this.select_field.options[0])) {
                    let newOPtion = {"value":val,"text":key}
                    options.push(newOPtion);
                }
           return options;
        }
    }
}