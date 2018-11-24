import _ from 'lodash'
import { User } from '../Db/models'

export const user = {
  fetchUser: async (req, res) => {
    const { auth } = req

    const fetchedUser = await User.findById(auth.user.id)

    if (!fetchedUser) {
      return res.status(403).send()
    }

    res.status(200).send({
      email: fetchedUser.email,
      markers: fetchedUser.markers
    })
  },
  getMarkers: async (req, res) => {
    const { auth } = req

    const fetchedUser = await User.findById(auth.user.id)

    if (!fetchedUser) {
      return res.status(403).send()
    }

    res.status(200).send({ markers: fetchedUser.markers })
  },
  saveMarkers: async (req, res) => {
    try {
      const {
        auth,
        body: { markers }
      } = req

      if (!_.isArray(markers)) {
        return res.status(400).send({ message: 'Provided data is not valid' })
      }

      const fetchedUser = await User.findById(auth.user.id)

      if (!fetchedUser) {
        return res.status(403).send()
      }

      fetchedUser.markers.push(...markers)
      await fetchedUser.save()

      res.status(200).send()
    } catch (err) {
      res.status(500).send()
    }
  }
}
