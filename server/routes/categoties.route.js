require('dotenv').config()
const express = require('express');
const router = express.Router();
const Categoties = require('../models/Categoties.modal')


// => /api/categoties
router.get('/', async (req, res) => {
   Categoties.find()
      .then(categoties => {
         res.json(categoties)
      })
      .catch(err => {
         res.status(404).json({message: "Категории не найдены"})
      })
})

module.exports = router;