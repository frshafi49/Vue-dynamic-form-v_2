
// import formData from 'fields.json';

// formData.field.forEach(fl => {
//     console.log('each field',field);
// });

let value = [{ "First Name": "Rifat Ahmed", "Email": "rifat@gmail.com", "Internal Status": "valid", "Status": "Valid", "Ocupation": ["teacher", "other"] }, { "First Name": "Fozle Rabbi Shafi", "Email": "frshafi49@gmail.com", "Internal Status": "invalid", "Status": "Valid", "Ocupation": ["engineer", "teacher"] }];



let tblHeader = [];
for (let [key, val] of Object.entries(value[0])) {
    tblHeader.push(key);
}
console.log(tblHeader);

let tblBody = [];
value.forEach(element => {
    let row =[];
    for (let [key, val] of Object.entries(element)) {
        if(Array.isArray(val)){
            row.push(val.join(','));
        }
        else row.push(val)
    }
   tblBody.push(row);

});
console.log(tblBody);
