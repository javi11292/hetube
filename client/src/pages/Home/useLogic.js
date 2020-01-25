import { useRef } from "react"
import useStore from "hooks/useStore"
import { useLocation } from "react-router-dom"

function useLogic() {
  const [logged] = useStore("logged")
  const contentRef = useRef()
  const location = useLocation()

  const isDashboardVisible = location.pathname === "/"

  return { logged, contentRef, isDashboardVisible }
}

export default useLogic