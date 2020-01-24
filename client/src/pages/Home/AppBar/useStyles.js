import { makeStyles } from "@material-ui/core"

export default makeStyles({
  buttons: {
    marginLeft: "auto",
  },
  title: {
    cursor: "pointer",
    paddingLeft: props => props.showBack ? 0 : "0.75rem",
  },
})