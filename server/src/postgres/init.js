function init(pool) {
  function users() {
    return pool.query(`CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY, 
      password TEXT NOT NULL
    )`)
  }

  function videos() {
    return pool.query(`CREATE TABLE IF NOT EXISTS videos (
      id TEXT PRIMARY KEY, 
      username TEXT REFERENCES users,
      title TEXT NOT NULL,
      description TEXT
    )`)
  }

  return async () => {
    await users()
    await videos()
  }
}

module.exports = init