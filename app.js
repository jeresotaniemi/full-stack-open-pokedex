const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.get('/version', (req, res) => {
  res.send('8') // change this string to ensure a new version deployed
})

app.get('/health', (req, res) => {
  res.send('ok')
})

// Simulate application breaking down
app.get('/', (req, res) => {
  res.status(500).send('Broken on purpose')
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
