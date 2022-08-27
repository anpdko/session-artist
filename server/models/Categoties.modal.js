const mongoose = require('mongoose');

const CotegoriesSchema = new mongoose.Schema({
   title: {
      type: 'string',
      required: true
   },
   img: {
      type: 'string', 
      required: true
   },
   url: {
      type: 'string',
      required: true
   }
})

module.exports = Cotegories = mongoose.model('cotegories', CotegoriesSchema);