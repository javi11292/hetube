const { Pool } = require("pg")
const init = require("./init")
const user = require("./user")
const video = require("./video")

const pool = new Pool({
  host: "postgres",
  user: "postgres",
})

module.exports = {
  init: init(pool),
  user: user(pool),
  video: video(pool),
}  