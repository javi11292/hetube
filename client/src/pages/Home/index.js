import React, { Suspense } from "react"
import { AppBar, Toolbar, Typography, Button } from "@material-ui/core"
import { Switch, Route } from "react-router-dom"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

const Dashboard = React.lazy(() => import("pages/Dashboard"))
const Upload = React.lazy(() => import("pages/Upload"))
const View = React.lazy(() => import("pages/View"))

function Home() {
  const { handleClick } = useLogic()
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography className={styles.title} variant="h6" onClick={handleClick} data-path="">HeTube</Typography>
          <div className={styles.buttons}>
            <Button color="inherit" onClick={handleClick} data-path="upload">Publicar</Button>
          </div>
        </Toolbar>
      </AppBar>

      <div className={styles.content}>
        <Suspense fallback={null}>
          <Switch>
            <Route path="/upload">
              <Upload />
            </Route>

            <Route path="/view/:id">
              <View />
            </Route>

            <Route>
              <Dashboard />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </div>
  )
}

export default Home