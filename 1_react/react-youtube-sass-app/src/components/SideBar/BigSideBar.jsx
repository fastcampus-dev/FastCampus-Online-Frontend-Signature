import React from 'react'
import ReactTooltip from 'react-tooltip'
import { MdVideoLibrary } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { FaCompass as Compass } from 'react-icons/fa'
import { MdSubscriptions } from 'react-icons/md'

import { RiHistoryLine } from 'react-icons/ri'
import { MdWatchLater } from 'react-icons/md'
import { RiThumbUpFill as Likes } from 'react-icons/ri'
import { AiFillSetting } from 'react-icons/ai'
import { RiFlagFill } from 'react-icons/ri'

const BigSideBar = () => {
  return (
    <aside className='big_sidebar'>
      <div className='big_sidebar_container'>
        <div className="sidebar_section">
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
        <div className="sidebar_section">
          <Link to='/feed/library' data-for='sidebar' data-tip='Library'>
            <div className='sidebar_icon_container'>
              <MdVideoLibrary size={23} className='sidebar_icon' />
              <h4 className='sidebar_text'>Library</h4>
            </div>
          </Link>

          <Link to='/feed/history' data-for='sidebar' data-tip='History'>
            <div className='sidebar_icon_container'>
              <RiHistoryLine size={23} className='sidebar_icon' />
              <h4 className='sidebar_text'>History</h4>
            </div>
          </Link>

          <Link to='/watchLaterList' data-for='sidebar' data-tip='Watch later'>
            <div className='sidebar_icon_container'>
              <MdWatchLater size={23} className='sidebar_icon' />
              <h4 className='sidebar_text'>Watch later</h4>
            </div>
          </Link>

          <Link to='/likedVideosList' data-for='sidebar' data-tip='Liked videos'>
            <div className='sidebar_icon_container'>
              <Likes size={23} className='sidebar_icon' />
              <h4 className='sidebar_text'>Liked videos</h4>
            </div>
          </Link>
        </div>

        <div className="sidebar_section">
          <Link to='/settings' data-for='sidebar' data-tip='Settings'>
            <div className='sidebar_icon_container'>
              <AiFillSetting size={23} className='sidebar_icon' />
              <h4 className='sidebar_text'>Settings</h4>
            </div>
          </Link>
          <Link to='/report/history' data-for='sidebar' data-tip='Report history'>
            <div className='sidebar_icon_container'>
              <RiFlagFill size={23} className='sidebar_icon' />
              <h4 className='sidebar_text'>Report history</h4>
            </div>
          </Link>
        </div>
        <ReactTooltip
          effect='solid'
          id='sidebar'
          place='bottom'
          backgroundColor='black'
          delayShow={300}
          arrowColor='transparent'
          offset={{ top: 0, left: 0 }}
          className='tooltip'
        />
      </div>
    </aside>
  )
}

export default BigSideBar
