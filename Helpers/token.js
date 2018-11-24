import JWT from 'jsonwebtoken'
import moment from 'moment'
import * as configs from '../Configs'

export const createToken = user => {
  const exp = +moment()
    .add(configs.token.expires)
    .format('x')

  const token = JWT.sign(
    {
      user,
      exp
    },
    configs.token.secret
  )

  return token
}
