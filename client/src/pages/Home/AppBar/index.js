import React from "react"
import {
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  IconButton,
} from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle"
import Videocam from "@material-ui/icons/Videocam"
import ArrowBack from "@material-ui/icons/ArrowBack"
import Exit from "@material-ui/icons/ExitToApp"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

function AppBar() {
  const {
    handleClick,
    logged,
    back,
    showBack,
    logout,
  } = useLogic()
  const styles = useStyles({ showBack })

  return (
    <MuiAppBar position="static">
      <Toolbar variant="dense" disableGutters>
        {showBack &&
          <IconButton color="inherit" onClick={back}>
            <ArrowBack />
          </IconButton>
        }

        <Typography className={styles.title} variant="h6" onClick={handleClick} data-path="">HeTube</Typography>

        <div className={styles.buttons}>
          {logged &&
            <IconButton color="inherit" onClick={handleClick} data-path="upload">
              <Videocam />
            </IconButton>
          }

          {logged ?
            <IconButton color="inherit" onClick={logout}>
              <Exit />
            </IconButton>
            :
            <IconButton color="inherit" onClick={handleClick} data-path="login">
              <AccountCircle />
            </IconButton>
          }
        </div>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar