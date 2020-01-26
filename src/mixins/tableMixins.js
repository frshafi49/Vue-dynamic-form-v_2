export default {

    methods: {
        getTblHeader: function () {
            let tblHeader = [];
            for (let [key, val] of Object.entries(this.inputData)) {
                tblHeader.push(key);
            }
            return tblHeader;
        },
        getTblBody: function () {
            let tblBody = [];
            this.tableData.forEach(element => {
                let row = [];
                for (let [key, val] of Object.entries(element)) {
                    if (Array.isArray(val)) {
                        row.push(val.join(","));
                    } else row.push(val);
                }
                tblBody.push(row);
            });
            return tblBody;
        }

    }
}