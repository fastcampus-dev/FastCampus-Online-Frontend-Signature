import React, { useCallback, useContext, useEffect, useState } from 'react'
import axios from '../../api/axios';
import VideoCard from '../../components/VideoCard/VideoCard';
import { SideBarContext } from '../../context/SideBarContext';
import { getVideoInfo } from '../../helpers/fetchingData';

const MainPage = () => {
  const storedVideos = JSON.parse(localStorage.getItem('mainVideos'))
  const [mainVideos, setMainVideos] = useState(storedVideos || [])
  const { setIsToggled } = useContext(SideBarContext)

  const getMainVideos = useCallback(async () => {
    try {
      if (!storedVideos) {
        const response = await axios.get(`/search?part=snippet&maxResults=10&q=beautiful%20place`)
        let videosArray = await response.data.items
        videosArray = await getVideoInfo(videosArray)
        setMainVideos(videosArray)

        localStorage.setItem('mainVideos', JSON.stringify(videosArray))
      }
    } catch (error) {
      console.log(error);
    }
  }, [storedVideos])

  useEffect(() => {
    getMainVideos();
  }, [getMainVideos])

  useEffect(() => {
    setIsToggled(true);
  }, [])
  

  return (
    <section className='mainGallery'>
      {mainVideos.map(video => (
        <VideoCard
          key={video.id.videoId}
          id={video.id.videoId}
          video={video}
          img={video.snippet.thumbnails.medium.url}
          info={video.snippet}
          eInfo={video.extraInfo}
          channelInfo={video.channelInfo}
        />
      ))}
    </section>
  )
}

export default MainPage

