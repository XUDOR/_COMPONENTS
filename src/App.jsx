////////////////////////////////////////////////
////custome hook tutorial WebDevSimplified  ////
////////////////////////////////////////////////


import React, { useState } from "react";
import useLocalStorage from "./Hooks/useLocalStorage";

export default function App(){
  const [name, setName] = useLocalStorage('')

  return (
    <input
    type="text"
    value={name}
    onChange={e => setName(e.target.value)}
    />
  )
}