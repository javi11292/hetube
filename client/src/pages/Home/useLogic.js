import useStore from "hooks/useStore"

function useLogic() {
  const [logged] = useStore("logged")

  return { logged }
}

export default useLogic