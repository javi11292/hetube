import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "0.5rem",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "50rem",
    [theme.breakpoints.up("sm")]: {
      padding: "1.5rem",
    }
  },
  hidden: {
    display: "none",
  },
  input: {
    margin: 0,
    marginBottom: "1rem",
  },
  fileInput: {
    cursor: "pointer",
  },
  innerInput: {
    pointerEvents: "none",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "auto 1fr",
  },
  submit: {
    alignSelf: "flex-end",
  },
}))