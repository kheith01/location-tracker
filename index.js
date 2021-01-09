const { response } = require('express');
const express = require('express');
const Datastore = require('nedb');

const app = express();
const database = new Datastore('dbase.db');

database.loadDatabase();

app.listen(3000, ()=> console.log('listening to port 3000'))
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}))

app.post('/data', (request, response)=>{
    console.log(request.body);
    const datainfo = request.body;
    const timestamp = Date.now();
    datainfo.timestamp = timestamp;
    database.insert(datainfo);
    response.json({data: 'delivered'})
})

app.get('/dataGet', (request, response)=>{
    database.find({}, (err, data)=>{
        if(err){
            response.end
            return;
        }else{
            response.json(data);
        }
    })
    
});