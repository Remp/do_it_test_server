import JWT from 'jsonwebtoken'
import * as configs from '../Configs'

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']

  if (!token) {
    return res.status(403).send('No token')
  }

  JWT.verify(token, configs.token.secret, (err, decoded) => {
    if (err) {
      return res.status(403).send('err', err)
    }

    req.auth = decoded
    next()
  })
}
