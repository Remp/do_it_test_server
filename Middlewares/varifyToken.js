export const verifyToken = async (req, res, next) => {
  const token = req.headers['Authorization']

  if (!token) {
    return res.status(403).send()
  }

  //get the user by the token
  //

  const user = {}

  req.user = user

  next()
}