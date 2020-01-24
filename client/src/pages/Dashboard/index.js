import React from "react"
import { Typography } from "@material-ui/core"
import { HOST } from "libraries/constants"
import Ratio from "components/Ratio"
import useLogic from "./useLogic"
import useStyles from "./useStyles"

function Dashboard() {
  const { videoList, handleClick } = useLogic()
  const styles = useStyles()

  return (
    <div className={styles.root}>
      {videoList.map(({ id, title }) => (
        <div key={id} className={styles.videoCard}>
          <Ratio>
            <video
              className={styles.video}
              src={`${HOST}/api/video/${id}`}
              data-id={id}
              onClick={handleClick} />
          </Ratio>
          <div className={styles.details}>
            <Typography variant="subtitle2">{title}</Typography>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
