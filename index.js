import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import * as configs from './Configs'
import * as middlewares from './Middlewares'
import * as controllers from './Controllers'
import * as routes from './Constants/routes'

mongoose.connect(configs.db.connectionString)

const app = express()

app.use(cors())

app.use(
  bodyParser.json({
    type: 'application/json'
  })
)

app.post(routes.auth, controllers.auth.logIn)
app.get(routes.user, middlewares.verifyToken, controllers.user.fetchUser)
app.get(
  `${routes.user}/markers`,
  middlewares.verifyToken,
  controllers.user.getMarkers
)
app.post(
  `${routes.user}/markers`,
  middlewares.verifyToken,
  controllers.user.saveMarkers
)

app.listen(configs.server.port)
