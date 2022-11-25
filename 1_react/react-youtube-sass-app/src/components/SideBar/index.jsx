import React, { useContext, useEffect } from 'react'
import { SideBarContext } from '../../context/SideBarContext'
import useWindowSize from '../../helpers/useWindowSize'
import BigSideBar from './BigSideBar'
import SmallSideBar from './SmallSideBar'

const SideBar = () => {
  const { width } = useWindowSize();
  const { isToggled, setIsToggled } = useContext(SideBarContext);

  useEffect(() => {
    width <= 1320
      ? setIsToggled(false)
      : location.pathname.startsWith('/video')
        ? setIsToggled(false)
        : setIsToggled(true)
  }, [location.pathname, setIsToggled, width])

  return (
    <>
      {
        location.pathname.startsWith('/video/')
          ? (isToggled
            ? <BigSideBar />
            : null
          )
          : width < 792
            ? null
            : (
              isToggled
                ? <BigSideBar />
                : <SmallSideBar />
            )
      }
    </>
  )
}

export default SideBar