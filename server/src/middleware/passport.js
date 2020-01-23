function passport(req, res, next) {
  if (req.session.username) next()
  else res.sendStatus(401)
}

module.exports = passport