function user(pool) {
  async function upload(id, username, title, description) {
    if (!id) throw new Error("Añade un archivo")
    if (!title) throw new Error("Añade un título")
    return pool.query("INSERT INTO videos (id, username, title, description) VALUES ($1, $2, $3, $4)", [id, username, title, description])
  }

  async function list(id) {
    const query = "SELECT id, username, title, description FROM videos"

    const args = id ? [`${query} WHERE id=$1`, [id]] : [query]
    const { rows } = await pool.query(...args)

    return rows
  }

  return {
    upload,
    list,
  }
}

module.exports = user