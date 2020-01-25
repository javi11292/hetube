import { makeStyles } from "@material-ui/core"

export default makeStyles({
  root: {
    display: "grid",
    gridTemplateRows: "auto 1fr",
    height: "100%",
  },
  content: {
    overflow: "scroll",
    display: "grid",
  },
  dashboard: {
    gridArea: "1 / 1",
    display: props => props.isDashboardVisible ? "unset" : "none",
  },
  pages: {
    gridArea: "1 / 1",
  },
})