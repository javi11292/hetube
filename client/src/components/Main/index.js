import React, { Suspense } from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Notifications from "components/Notifications"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

const Home = React.lazy(() => import("pages/Home"))

function Main() {
  useLogic()
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <Notifications />
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Suspense fallback={null}>
          <Switch>
            <Route>
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default React.memo(Main)