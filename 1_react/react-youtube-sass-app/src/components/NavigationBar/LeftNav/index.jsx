import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import imgUrl from '../../../assets/logo.png';
import { IoMenu as Menu } from 'react-icons/io5'
import { SideBarContext } from '../../../context/SideBarContext';

const LeftNav = () => {
  const { handleToggleSideBar } = useContext(SideBarContext);

  return (
    <div className='menu-logo'>
      <button
        onClick={handleToggleSideBar}
        className='icon-container burgerMenu'>
        <Menu size={25} />
      </button>

      <div className='logo-container'>
        <Link to='/'>
          <img src={imgUrl} alt="youtube logo" data-tip='YouTube Home' data-for='sidebar' />
        </Link>
      </div>
    </div>
  )
}

export default LeftNav


