import React, { useCallback, useContext, useEffect, useState } from 'react'
import VideoCard from '../../components/VideoCard/VideoCard'
import { SearchContext } from '../../context/SearchContext'
import { SideBarContext } from '../../context/SideBarContext'
import { getVideoInfo } from '../../helpers/fetchingData'

const SearchedVidoesPage = () => {
    const [searchedVideos, setSearchedVideos] = useState([])
    const { searchQuery } = useContext(SearchContext)
    const { setIsToggled } = useContext(SideBarContext)

    const loadVideoInfo = useCallback(async () => {
        setIsToggled(true);
        const videos = await getVideoInfo(searchQuery.videos)
        setSearchedVideos(videos)
    }, [searchQuery.videos, setIsToggled])

    useEffect(() => {
        loadVideoInfo();
    }, [loadVideoInfo])

    const searchedVideosMarkUp = searchedVideos && searchedVideos.map(
        video => (
            <VideoCard
                key={video.id.videoId}
                id={video.id.videoId}
                video={video}
                img={video.snippet.thumbnails.medium.url}
                info={video.snippet}
                eInfo={video.extraInfo}
                channelInfo={video.channelInfo}
            />
        )
    )

    return (
        <section className='searchedVideos'>
            {searchedVideosMarkUp}
        </section>
    )
}

export default SearchedVidoesPage