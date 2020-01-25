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
  const { logged, contentRef } = useLogic()
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <AppBar />

      <div className={styles.content} ref={contentRef}>
        <div className={styles.area}>
          <Dashboard contentRef={contentRef} />
        </div>

        <div className={styles.area}>
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
            </Switch>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Home