// 3 - Alterando contexto
import { useContext } from "react"
import {CounterContext} from "../context/CounterContext"


const ChangeCounter = () => {
  const [counter, setCounter] = useContext(CounterContext)
  return (
    <div>ChangeCount</div>
  )
}

export default ChangeCounter