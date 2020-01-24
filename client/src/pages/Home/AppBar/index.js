import React from "react"
import { AppBar as MuiAppBar, Toolbar, Typography, IconButton } from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle"
import Videocam from "@material-ui/icons/Videocam"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

function AppBar() {
  const { handleClick } = useLogic()
  const styles = useStyles()

  return (
    <MuiAppBar position="static">
      <Toolbar variant="dense">
        <Typography className={styles.title} variant="h6" onClick={handleClick} data-path="">HeTube</Typography>
        <div className={styles.buttons}>
          <IconButton color="inherit" onClick={handleClick} data-path="upload">
            <Videocam />
          </IconButton>

          <IconButton color="inherit" onClick={handleClick} data-path="login">
            <AccountCircle />
          </IconButton>
        </div>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar