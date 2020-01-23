const fs = require("fs")
const express = require("express")
const router = express.Router()
const multer = require("multer")
const uuidv4 = require("uuid/v4")
const postgres = require("../postgres")
const passport = require("../middleware/passport")

const upload = multer({
  storage: multer.diskStorage({
    destination: "/videos",
    filename: (req, file, cb) => {
      cb(null, uuidv4())
    },
  })
})

router.use(express.static("/videos"))

router.post("/upload", passport, upload.single("file"), async ({ file = {}, session, body }, res) => {
  try {
    await postgres.video.upload(file.filename, session.username, body.title, body.description)
    res.sendStatus(200)
  } catch (error) {
    res.send({ error: error.message })
    fs.unlink(`/videos/${file.filename}`, () => { })
  }
})

router.get("/list/:id?", async (req, res) => {
  try {
    res.send(await postgres.video.list(req.params.id))
  } catch (error) {
    res.send({ error: error.message })
  }
})

module.exports = router