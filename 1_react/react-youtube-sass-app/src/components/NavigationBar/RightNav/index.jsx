
import React from 'react'
import { MdVideoCall as VideoIcon } from 'react-icons/md'
import { MdApps as Apps } from 'react-icons/md'
import { MdNotifications as Notification } from 'react-icons/md'
import ReactTooltip from 'react-tooltip';

const RightNav = () => {

    return (
        <div className='buttons'>
            <button className='icon-container'>
                <VideoIcon size={25} data-tip='Create' data-for='navbar' />
            </button>

            <button className='icon-container'>
                <Apps size={25} data-tip='YouTube Apps' data-for='navbar' />
            </button>

            <button className='icon-container'>
                <Notification size={25} data-tip='Notifications' data-for='navbar' />
            </button>

            <ReactTooltip
                id='navbar'
                backgroundColor='grey'
                effect='solid'
                delayHide={150}
                arrowColor='transparent'
            />
        </div>
    )
}

export default RightNav