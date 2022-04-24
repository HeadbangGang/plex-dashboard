const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')

const app = express()
const config = require('../webpack.config.js')
const compiler = webpack(config)

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
)

app.get('/radarr', (req, res) => res.sendStatus(200))
app.get('/sonarr', (req, res) => res.sendStatus(400))
app.get('/tautulli', (req, res) => res.sendStatus(200))
app.get('/ombi', (req, res) => res.sendStatus(500))
app.get('/transmission', (req, res) => res.sendStatus(404))

app.listen(3000, function () {
  console.log('listening on port 3000!\n')
})
