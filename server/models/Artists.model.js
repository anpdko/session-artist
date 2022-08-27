const mongoose = require('mongoose');

const ArtistsSchema = new mongoose.Schema({
   login: {
      type: 'string',
      required: true
   },
   img: {
      type: 'string', 
      required: true
   },
   categorId: {
      type: mongoose.Types.ObjectId, 
      required: true,
      ref: 'Categoties'
   },
   description: {
      type: 'string',
      required: true
   },
   rating: {
      type: 'number',
      default: Date.now
   },
   like: {
      type: 'boolean',
      required: true
   },
   price: {
      type: 'number',
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   },
   url: {
      type: 'string',
      required: true
   }
})

module.exports = Artists = mongoose.model('artists', ArtistsSchema);