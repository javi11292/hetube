import React from "react"
import { Typography } from "@material-ui/core"
import Ratio from "components/Ratio"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

function View() {
  const { id, details = {} } = useLogic()
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <Ratio>
        <video className={styles.video} src={`${process.env.REACT_APP_HOST || ""}/api/video/${id}`} controls />
      </Ratio>
      <div className={styles.details}>
        <Typography variant="h5">{details.title}</Typography>
        <Typography className={styles.description} variant="subtitle1">{details.description}</Typography>
      </div>
    </div>
  )
}

export default View
