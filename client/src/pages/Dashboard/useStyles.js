import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    "@media screen and (min-width: 400px)": {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
  videoCard: {
    margin: "0.5rem",
  },
  video: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  title: {
    marginTop: "0.5rem",
  },
}))