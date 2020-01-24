import { useRef } from "react"
import useStore from "hooks/useStore"

function useLogic() {
  const [logged] = useStore("logged")
  const contentRef = useRef()

  return { logged, contentRef }
}

export default useLogic