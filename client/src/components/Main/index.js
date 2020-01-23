import React, { Suspense } from "react"
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Notifications from "components/Notifications"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

const Login = React.lazy(() => import("pages/Login"))
const Home = React.lazy(() => import("pages/Home"))

function Main() {
  const { logged } = useLogic()
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <Notifications />
      <BrowserRouter>
        <Suspense fallback={null}>
          <Switch>
            <Route path={["/login", "/register"]}>
              {logged && <Redirect to="/" />}
              <Login />
            </Route>
            
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