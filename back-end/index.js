const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const mongoose = require('mongoose');

app.use(express.json())

mongoose.connect('mongodb://michal:<Password>@cluster0-shard-00-00-kx74d.mongodb.net:27017,cluster0-shard-00-01-kx74d.mongodb.net:27017,cluster0-shard-00-02-kx74d.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true')


app.listen(port, () => console.log(`server started on port ${port}`))