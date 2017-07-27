const express = require('express');
const port = process.env.PORT || 8080;
const cors =  require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan')



const attitudes = require('./routes/attitudes');


const app = express();


app.use(cors());
app.use
(bodyParser.json());
app.use(bodyParser.urlencoded({encoded: false}))

app.get('/',(req, res, next) => {
    res.send('Hello World')
});

app.use('/attitudes', attitudes);



app.listen(port)

module.exports = app;
