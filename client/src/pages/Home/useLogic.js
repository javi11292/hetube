import { useHistory } from "react-router-dom"

function useLogic() {
  const history = useHistory()

  function handleClick({ currentTarget }) {
    history.push(`/${currentTarget.dataset.path}`)
  }

  return { handleClick }
}

export default useLogic