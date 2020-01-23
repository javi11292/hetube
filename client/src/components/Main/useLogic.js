import { useEffect } from "react"
import { post } from "libraries/fetch"
import useStore from "hooks/useStore"

function useLogic() {
  const [logged, setLogged] = useStore("logged")

  useEffect(() => {
    async function checkSession() {
      const { error } = await post("/login")
      setLogged(!error)
    }

    checkSession()
  }, [setLogged])

  return { logged }
}

export default useLogic