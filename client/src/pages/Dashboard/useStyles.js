import { makeStyles } from "@material-ui/core"

export default makeStyles(theme => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr",
    [theme.breakpoints.up("sm")]: {
      gridTemplateColumns: "1fr 1fr",
    },
    [theme.breakpoints.up("md")]: {
      gridTemplateColumns: "1fr 1fr 1fr",
    },
    [theme.breakpoints.up("lg")]: {
      gridTemplateColumns: "1fr 1fr 1fr 1fr",
    },
  },
  videoCard: {
    [theme.breakpoints.up("sm")]: {
      margin: "0.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      margin: "1rem",
    },
  },
  video: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  details: {
    padding: "0.5rem",
    paddingBottom: "1.5rem",
  },
}))