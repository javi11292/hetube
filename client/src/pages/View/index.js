import React from "react"
import { Typography } from "@material-ui/core"
import { HOST } from "libraries/constants"
import Ratio from "components/Ratio"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

function View() {
  const { id, details = {} } = useLogic()
  const styles = useStyles()

  return (
    <>
      <Ratio>
        <video preload="metadata" className={styles.video} src={`${HOST}/api/video/${id}`} controls />
      </Ratio>
      <div className={styles.details}>
        <Typography variant="h5">{details.title}</Typography>
        <Typography className={styles.description} variant="subtitle1">{details.description}</Typography>
      </div>
    </>
  )
}

export default View
