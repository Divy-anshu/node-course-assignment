// require csvtojson
var csv = require("csvtojson");

const csvFilePath='customer-data.csv'
csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    console.log(jsonObj);
})