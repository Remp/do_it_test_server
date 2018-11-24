import crypto from 'crypto'
import * as configs from '../Configs'

const { algrotithm, password } = configs.crypto

export const encrypt = text => {
  const cipher = crypto.createCipher(algrotithm, password)
  let crypted = cipher.update(text, 'utf8', 'hex')
  crypted += cipher.final('hex')
  return crypted
}

export const decrypt = text => {
  var decipher = crypto.createDecipher(algrotithm, password)
  let dec = decipher.update(text, 'hex', 'utf8')
  dec += decipher.final('utf8')
  return dec
}
