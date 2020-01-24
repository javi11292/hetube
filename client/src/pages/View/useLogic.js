import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { get } from "libraries/fetch"

function useLogic() {
  const { id } = useParams()
  const [details, setDetails] = useState()

  useEffect(() => {
    async function getDetails() {
      const response = await get(`/video/get/${id}`)
      if (!response.error) setDetails(response[0])
    }

    getDetails()
  }, [id])

  return { id, details }
}

export default useLogic