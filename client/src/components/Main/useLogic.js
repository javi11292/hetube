import { useEffect } from "react"
import { post } from "libraries/fetch"
import useStore from "hooks/useStore"

function useLogic() {
  const setLogged = useStore("logged", false)

  useEffect(() => {
    async function checkSession() {
      const { error } = await post("/login")
      setLogged(!error)
    }

    checkSession()
  }, [setLogged])
}

export default useLogic