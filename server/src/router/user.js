const router = require("express").Router()
const postgres = require("../postgres")

router.post("/", async (req, res) => {
  const api = req.baseUrl.split("/").pop()

  if (api === "logout") {
    req.session.logged = false
    res.sendStatus(200)
    return
  }

  if (req.session.logged) {
    res.sendStatus(200)
    return
  }

  try {
    await postgres.user[api](req.body.username, req.body.password, req.body.confirmPassword)
    req.session.username = req.body.username
    req.session.logged = true
    res.sendStatus(200)
  } catch (error) {
    res.send({ error: error.message })
  }
})

module.exports = router