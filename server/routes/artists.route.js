require('dotenv').config()
const express = require('express');
const router = express.Router();
const Artists = require('../models/Artists.model')

router.get('/', async (req, res) => {
   // for(let item of items){
   //    await Artists.create(item)
   //       .then(async book => {
   //          await console.log("OK")
   //       })
   //       .catch(err => res.status(400).json({ error: 'Error' }));
   // }
   Artists.find()
      .then(artists => {
         res.json(artists)
      })
      .catch(err => {
         res.status(404).json({message: "Артисты не найдены"})
      })
})

router.get('/:id', (req, res) => {
   console.log("id: ", req.params.id)
   Artists.findById(req.params.id)
     .then(artist => {
       res.json(artist)
     })
     .catch(err => res.status(404).json({ nobookfound: 'Книга не найдена' }));
});


module.exports = router;