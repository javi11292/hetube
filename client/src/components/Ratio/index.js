import React from "react"
import useStyles from "./useStyles"

function Ratio({ children }) {
  const styles = useStyles()

  return (
    <div className={styles.root}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

export default Ratio