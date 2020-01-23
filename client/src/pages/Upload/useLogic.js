import { useState } from "react"
import { useHistory } from "react-router-dom"
import { upload } from "libraries/fetch"
import useStore from "hooks/useStore"
import { NOTIFICATION } from "libraries/constants"

function useLogic() {
  const history = useHistory()
  const addNotification = useStore("notifications", false)
  const [file, setFile] = useState()
  const [loading, setLoading] = useState(false)
  const [details, setDetails] = useState({ title: "", description: "" })

  function handleFile({ currentTarget: { files } }) {
    setFile(files[0])
  }

  function handleChange({ currentTarget }) {
    setDetails(details => ({ ...details, [currentTarget.dataset.id]: currentTarget.value }))
  }

  async function submit() {
    setLoading(true)
    const { error } = await upload("/video/upload", { file, ...details })

    if (error) {
      addNotification({ action: "push", value: error, type: NOTIFICATION.error })
    } else {
      addNotification({ action: "push", value: "Video publicado", type: NOTIFICATION.info })
      history.push("/")
    }
    setLoading(false)
  }

  return { handleFile, handleChange, file, submit, details, loading }
}

export default useLogic