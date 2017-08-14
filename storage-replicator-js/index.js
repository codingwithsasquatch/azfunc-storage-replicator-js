module.exports = function (context) {
    context.log("JavaScript blob trigger function processed blob \n Name:", context.bindingData.name, "\n Blob Size:", context.bindings.inputBlob.length, "Bytes");
    context.bindings.outputBlob = context.bindings.inputBlob;
    context.done();
};