//importing frameworks and models
const express = require('express')
const mongoose = require('mongoose')
const ShortUrl = require('./models/shortUrl')
const app = express()

//connecting to db
const dbURI = 'mongodb+srv://joshberdon:Berdon22@cluster0.5lm6g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
 
mongoose.connect(dbURI).then(() => {
  console.log('Connected to MongoDB Atlas');
}).catch(err => {
  console.error('Error connecting to MongoDB Atlas', err);
});


app.set('view engine', 'ejs')//rendering html elements
app.use(express.urlencoded({ extended: false }))

//get route to render main page with list of urls
app.get('/', async (req, res) => {
  const shortUrls = await ShortUrl.find()
  res.render('index', { shortUrls: shortUrls })
})

//post route to create a new url from the submitted full url
app.post('/shortUrls', async (req, res) => {
  await ShortUrl.create({ full: req.body.fullUrl })

  res.redirect('/')
})

//get route to redirect the full url based on the shortened one =
app.get('/:shortUrl', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl })
  if (shortUrl == null) return res.sendStatus(404)

  shortUrl.clicks++
  shortUrl.save()

  res.redirect(shortUrl.full)
})

//route to handle the click count for the shortened url
app.post('/update-click-count/:id', async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.id });
  if (shortUrl) {
    shortUrl.clicks++;
    await shortUrl.save();
    res.status(200).send({ clicks: shortUrl.clicks });
  } else {
    res.status(404).send('URL not found');
  }
});

// Starting server to listen on port specified by Heroku or default to 5000
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});