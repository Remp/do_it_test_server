import _ from 'lodash'

export const logIn = (req, res) => {
  const { password, email } = req.body

  if (!(_.isString(password) || _.isString(email))) {
    return res.status(400).send({ message: 'provided data is not valid' })
  }

  
}
