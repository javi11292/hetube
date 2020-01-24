import { useHistory } from "react-router-dom"
import useStore from "hooks/useStore"
import { post } from "libraries/fetch"
import { NOTIFICATION } from "libraries/constants"

function useLogic() {
  const history = useHistory()
  const [logged] = useStore("logged")
  const addNotification = useStore("notifications", false)
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

  async function logout() {
    const { error } = await post("/logout")
    if (!error) {
      window.location.assign("/")
    } else {
      addNotification({ action: "push", value: error, type: NOTIFICATION.error })
    }
  }

  return {
    logged,
    handleClick,
    back,
    showBack,
    logout,
  }
}

export default useLogic