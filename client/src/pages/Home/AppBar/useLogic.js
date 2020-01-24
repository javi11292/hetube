import { useHistory } from "react-router-dom"

function useLogic() {
  const history = useHistory()

  function handleClick({ currentTarget }) {
    if (!currentTarget.dataset.path) {
      window.location.assign("/")
    } else {
      history.push(`/${currentTarget.dataset.path}`)
    }
  }

  return { handleClick }
}

export default useLogic