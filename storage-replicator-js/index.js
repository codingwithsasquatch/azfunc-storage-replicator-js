module.exports = function (context, inputBlob, outputBlob) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", myBlob.length, "Bytes");
    outputBlob = inputBlob;
    context.done();
};