import { makeStyles } from "@material-ui/core"

export default makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    height: "100%",
  },
  content: {
    overflow: "auto",
  },
})