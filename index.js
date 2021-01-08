const express = require('express');
const Datastore = require('nedb');

const app = express();
const database = new Datastore('dbase.db');

database.loadDatabase();

app.listen(3000, ()=> console.log('listening to port 3000'))
app.use(express.static('public'));