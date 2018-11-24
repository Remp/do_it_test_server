import _ from 'lodash'
import { User } from '../Db/models'
import { createToken } from '../Helpers/token'
import { encrypt, decrypt } from '../Helpers/crypto'

export const auth = {
  logIn: async (req, res) => {
    try {
      const { password, email } = req.body

      if (!_.isString(email)) {
        return res.status(400).send({ message: 'provided data is not valid' })
      }
      if (!_.isString(password)) {
        return res.status(400).send({ message: 'provided data is not valid' })
      }

      const user = await User.findOne({ email: email.toLowerCase() })

      if (!user) {
        const user = await User.create({
          email: email.toLowerCase(),
          password: encrypt(password)
        })

        const token = createToken({ id: user._id })

        return res.status(200).send({ token, email, markers: [] })
      }

      if (decrypt(user.password) !== password) {
        return res.status(400).send({ message: 'incorrect email or password' })
      }

      const token = createToken({ id: user._id })

      res.status(200).send({ email, markers: user.markers, token })
    } catch (err) {
      res.status(500).send()
    }
  }
}
