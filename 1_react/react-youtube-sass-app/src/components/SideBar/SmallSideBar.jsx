import React from 'react'
import { Link } from 'react-router-dom'
import { FaCompass as Compass } from 'react-icons/fa'
import { AiFillHome } from 'react-icons/ai'
import { MdSubscriptions } from 'react-icons/md'

const SmallSideBar = () => {
  return (
    <aside className='small_sidebar'>
      <div className='small_sidebar_container'>
        <Link to='/' data-for='sidebar' data-tip='Home'>
          <div className='sidebar_icon_container'>
            <AiFillHome size={23} className='sidebar_icon' />
            <h4 className='sidebar_text'>Home</h4>
          </div>
        </Link>
        <Link to='/feed/explore' data-for='sidebar' data-tip='Explore'>
          <div className='sidebar_icon_container'>
            <Compass size={23} className='sidebar_icon' />
            <h4 className='sidebar_text'>Explore</h4>
          </div>
        </Link>
        <Link to='/feed/subscriptions' data-for='sidebar' data-tip='Subscriptions'>
          <div className='sidebar_icon_container'>
            <MdSubscriptions size={23} className='sidebar_icon' />
            <h4 className='sidebar_text'>Subscriptions</h4>
          </div>
        </Link>
      </div>
    </aside>
  )
}

export default SmallSideBar
