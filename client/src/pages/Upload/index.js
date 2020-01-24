import React from "react"
import { Button, TextField } from "@material-ui/core"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

function Input(props) {
  const styles = useStyles()

  return <TextField
    fullWidth
    margin="dense"
    variant="outlined"
    className={styles.input}
    {...props} />
}

function Home() {
  const { handleFile, handleChange, file = { name: "" }, details, submit, loading } = useLogic()
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <label>
        <input className={styles.hidden} type="file" onChange={handleFile} />
        <Input
          label="Archivo"
          value={file.name}
          InputLabelProps={{ shrink: true }}
          InputProps={{ readOnly: true, classes: { root: styles.fileInput, input: styles.innerInput } }} />
      </label>

      <Input
        label="Título"
        value={details.title}
        onChange={handleChange}
        inputProps={{ "data-id": "title" }} />

      <Input
        multiline
        rows="5"
        label="Descripción"
        value={details.description}
        onChange={handleChange}
        inputProps={{ "data-id": "description" }} />

      <Button disabled={loading} className={styles.submit} variant="contained" onClick={submit}>Enviar</Button>
    </div>
  )
}

export default Home