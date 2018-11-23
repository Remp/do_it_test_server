import express from 'express'
import bodyParser from 'body-parser'
import * as configs from './Configs'
import * as middlewares from './Middlewares'

const app = express()

app.use(
  bodyParser.json({
    type: 'application/json',
    limit: '50mb'
  })
)

server.listen(configs.server.port, () =>
  console.info("server starts at port ", configs.server.port)
);