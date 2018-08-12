const express = require('express')
const path = require('path')
const logger = require('morgan')
const app = express()

app.use(logger('dev'))
app.use(express.static('public'))
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index'));
});

// get anything that hasn't already been matched
app.use('*', (req, res) => {
  // set the status as 404 and send a response
  res.status(404).send({
    error: 'Not Found',
  });
});