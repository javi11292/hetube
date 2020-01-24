import React, { Suspense } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import AppBar from "./AppBar"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

const Dashboard = React.lazy(() => import("pages/Dashboard"))
const Upload = React.lazy(() => import("pages/Upload"))
const View = React.lazy(() => import("pages/View"))
const Login = React.lazy(() => import("pages/Login"))

function Home() {
  const { logged } = useLogic()
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <AppBar />

      <div className={styles.content}>
        <Suspense fallback={null}>
          <Switch>
            <Route path={["/login", "/register"]}>
              {logged && <Redirect to="/" />}
              <Login />
            </Route>

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