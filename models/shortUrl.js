const mongoose = require('mongoose')
const shortId = require('shortid')

//creating mongoose schema to store the shortened urls
const shortUrlSchema = new mongoose.Schema({
  full: {//full url
    type: String,
    required: true
  },
  short: {//short url
    type: String,
    required: true,
    default: shortId.generate
  },
  clicks: {//counter to track amount of clicks
    type: Number,
    required: true,
    default: 0
  }
})

module.exports = mongoose.model('ShortUrl', shortUrlSchema)//exporting