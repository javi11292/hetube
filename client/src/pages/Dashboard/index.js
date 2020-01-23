import React from "react"
import { Typography } from "@material-ui/core"
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
              src={`${process.env.REACT_APP_HOST || ""}/api/video/${id}`}
              data-id={id}
              onClick={handleClick} />
          </Ratio>
          <Typography variant="subtitle2" className={styles.title}>{title}</Typography>
        </div>
      ))}
    </div>
  )
}

export default Dashboard
