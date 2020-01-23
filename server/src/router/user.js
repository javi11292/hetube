const router = require("express").Router()
const postgres = require("../postgres")

router.post("/", async (req, res) => {
  if (req.session.username) {
    res.sendStatus(200)
    return
  }

  const api = req.baseUrl.split("/").pop()

  try {
    await postgres.user[api](req.body.username, req.body.password, req.body.confirmPassword)
    req.session.username = req.body.username
    res.sendStatus(200)
  } catch (error) {
    res.send({ error: error.message })
  }
})

module.exports = router