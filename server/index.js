require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors')
const path = require('path')

const app = express()
const PORT = process.env.PORT || 5000;
const URL_MONGO = process.env.URL_MONGO || ''

app.use(cors({origin: true, credentials: true}))
app.use(express.json({extension: true}))

app.use('/static/images', express.static(path.join(__dirname, 'static/images')))

app.use('/api/categoties', require('./routes/categoties.route'))
app.use('/api/artists', require('./routes/artists.route'))

const start = async () => {
   try{
      await mongoose.connect(URL_MONGO, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
      })
      app.listen(PORT, () => {
         console.log('Server lisstening on post ' + PORT)
      })
   }
   catch(err){
      console.error(err)
   }
}

start()