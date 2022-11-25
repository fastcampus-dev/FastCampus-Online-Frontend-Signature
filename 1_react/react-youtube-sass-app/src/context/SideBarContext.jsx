import React, { useState } from 'react'
import { createContext } from "react";

export const SideBarContext = createContext()

export const SideBarContextProvider = (props) => {
  const [isToggled, setIsToggled] = useState(true)

  const handleToggleSideBar = () => {
    setIsToggled(!isToggled)
  }

  return (
    <SideBarContext.Provider
      value={{ isToggled, setIsToggled, handleToggleSideBar }}
      {...props}
    />
  )
}

