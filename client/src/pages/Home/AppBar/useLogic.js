import { useHistory } from "react-router-dom"
import useStore from "hooks/useStore"

function useLogic() {
  const history = useHistory()
  const [logged] = useStore("logged")
  const showBack = history.location.pathname !== "/"

  function handleClick({ currentTarget }) {
    if (!currentTarget.dataset.path) {
      window.location.assign("/")
    } else {
      history.push(`/${currentTarget.dataset.path}`)
    }
  }

  function back() {
    history.goBack()
  }

  return { logged, handleClick, back, showBack }
}

export default useLogic