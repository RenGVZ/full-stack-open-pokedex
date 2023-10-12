const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 4000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  res.send('1')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started')
})
