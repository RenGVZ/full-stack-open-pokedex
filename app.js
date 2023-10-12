const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 4000

app.use(express.static('dist'))

app.get('/health', (req, res) => {
  throw new Error('oh no')
  // eslint-disable-next-line no-unreachable
  res.send('healthy yo')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('server started')
})
