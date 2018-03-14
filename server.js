const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
const mongoose   = require('mongoose');
const router = express.Router();

const bear = require('./app/controllers/bear');

//middlewares
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


router.use(function(req, res, next){
    console.log('Something is happening');
    next();
})

//default routes
router.get('/', function (req, res) {
    res.json({message: 'hooray! welcome to our api!'});

})

app.use('/api' , router);
app.use('/api/bears' , bear);


mongoose.connect('mongodb://localhost:27017/mydb', ()=> {

});

app.listen(port);
console.log('Magic happens on port '+ port);