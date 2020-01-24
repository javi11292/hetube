import { useState, useEffect, useRef } from "react"
import { useHistory } from "react-router-dom"
import { get } from "libraries/fetch"
import useStore from "hooks/useStore"
import { NOTIFICATION } from "libraries/constants"

function useLogic({ contentRef }) {
  const [videoList, setVideoList] = useState([])
  const history = useHistory()
  const [page, setPage] = useState(0)
  const addNotification = useStore("notifications", false)
  const allowLoading = useRef(false)

  useEffect(() => {
    const content = contentRef.current

    function handleScroll() {
      if (content.scrollTop === content.scrollHeight - content.offsetHeight && allowLoading.current) {
        setPage(page => page + 1)
      }
    }

    handleScroll()

    content.addEventListener("scroll", handleScroll)
    return () => content.removeEventListener("scroll", handleScroll)
  }, [videoList, contentRef])

  useEffect(() => {
    async function getVideoList() {
      allowLoading.current = false
      const response = await get(`/video/list/${page}`)
      if (!response.error) {
        setVideoList(videoList => [...videoList, ...response])
        allowLoading.current = response.length > 0
      } else {
        addNotification({ action: "push", value: response.error, type: NOTIFICATION.error })
      }
    }

    getVideoList()
  }, [page, addNotification])

  function handleClick({ currentTarget }) {
    history.push(`/view/${currentTarget.dataset.id}`)
  }

  return { videoList, handleClick }
}

export default useLogic