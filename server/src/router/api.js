const router = require("express").Router()
const user = require("./user")
const video = require("./video")

router.use("/login", user)
router.use("/logout", user)
router.use("/register", user)
router.use("/video", video)

router.use((req, res) => res.sendStatus(404))

module.exports = router