const express= require('express');
const app = express();
const bodyParser = require('body-parser');
const router = express.Router();

var Bear     = require('../models/bear');

router.route('/')

   .post(function(req, res){

    var bear = new Bear();
    bear.name= req.body.name;
    console.log(bear);

    bear.save(function (err){
        if(err)
            res.send(err);


        res.json({ message: 'Bear created!' });
    })
   })

   .get(function (req, res){
       console.log('Test');
       Bear.find(function(err, bears){
           if(err)
             res.send(err);
           res.json(bears);
       })
   })

router.route('/:bear_id')
  .get(function(req, res){
    Bear.findById(req.params.bear_id, function(err, bear){
        if(err)
            res.send(err);

        res.json(bear);
    })
  })

  .put(function(req, res){

    Bear.findById(req.params.bear_id, function(err, bear){

        if(err)
            res.send(err)

        bear.name= req.body.name;

        bear.save(function(err){
            if(err)
                res.send(err)
            res.json({message: 'Bear updated'})
        })
    })
  })

  .delete(function(req,res){
      Bear.remove({
          _id: req.params.bear_id
      }, function(err, bear){
          if(err)
            res.send(err);

          res.json({message:'Successfully deleted'})
      })
  })

module.exports = router;