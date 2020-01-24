const PAGE_SIZE = 5

function user(pool) {
  async function upload(id, username, title, description) {
    if (!id) throw new Error("Añade un archivo")
    if (!title) throw new Error("Añade un título")
    return pool.query("INSERT INTO videos (id, username, title, description) VALUES ($1, $2, $3, $4)", [id, username, title, description])
  }

  async function list(page = 0) {
    const { rows } = await pool.query(
      "SELECT id, username, title, description FROM videos LIMIT $1 OFFSET $2",
      [PAGE_SIZE, page * PAGE_SIZE],
    )
    return rows
  }

  async function get(id) {
    const { rows } = await pool.query("SELECT id, username, title, description FROM videos WHERE id = $1", [id])
    return rows
  }

  return {
    upload,
    list,
    get,
  }
}

module.exports = user