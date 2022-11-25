/* eslint-disable react/prop-types */
import React, { useCallback, useEffect, useState } from 'react'
import { getRelatedVideos, getVideoInfo } from '../../helpers/fetchingData'
import VideoCard from '../../components/VideoCard/VideoCard'

const RelatedVideos = ({ currentVideo }) => {
  const [relatedVideos, setRelatedVideos] = useState([])

  const loadRelativeVideo = useCallback(async () => {
    const relVideos = await getRelatedVideos(currentVideo);
    const relVideosInfo = await getVideoInfo(relVideos);
    setRelatedVideos(relVideosInfo);
  }, [currentVideo])

  useEffect(() => {
    loadRelativeVideo()
  }, [loadRelativeVideo])

  const relatedVideosMarkUp = relatedVideos?.map(video => (
    <VideoCard
      key={video.id.videoId}
      id={video.id.videoId}
      video={video}
      info={video.snippet}
      eInfo={video.extraInfo}
      img={video.snippet.thumbnails.medium.url}
      channelInfo={video.channelInfo}
    />
  ))
  
  return (
    <div className='related_list'>
      {relatedVideosMarkUp}
    </div>
  )
}

export default RelatedVideos