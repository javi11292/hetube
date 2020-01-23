import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { get } from "libraries/fetch"

function useLogic() {
  const [videoList, setVideoList] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function getVideoList() {
      const response = await get("/video/list")
      if (!response.error) setVideoList(response)
    }

    getVideoList()
  }, [])

  function handleClick({ currentTarget }) {
    history.push(`/view/${currentTarget.dataset.id}`)
  }

  return { videoList, handleClick }
}

export default useLogic