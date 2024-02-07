import { useState } from "react"

export default useLocalStorage (initialValue) {
  const [value, setValue] = useState(initialValue)

  return [value, setValue]
}