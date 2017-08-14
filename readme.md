# Azure Function Storage Replicator - JavaScript

[![Deploy to Azure](http://azuredeploy.net/deploybutton.svg)](https://portal.azure.com/#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fcodingwithsasquatch%2Fazfunc-storage-replicator-js%2Fmaster%2Fazuredeploy.json)


The `Storage Replicator` makes it incredibly easy to copy all changes to new Blobs inside of Azure Storage Account to another Azure Storage Acount. This sample demonstrates a simple use case of processing data from a given Blob using Javascript.

## How it works

For a `BlobTrigger` to work, you provide a path which dictates where the blobs are located inside your container, and can also help restrict the types of blobs you wish to return. For instance, you can set the path to `samples/{name}.png` to restrict the trigger to only the samples path and only blobs with ".png" at the end of their name.

## Learn more

<TODO> Documentation