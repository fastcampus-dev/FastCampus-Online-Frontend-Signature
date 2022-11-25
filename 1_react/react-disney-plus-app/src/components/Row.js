import axios from '../api/axios';
import React, { useCallback, useEffect, useState } from 'react'
import "./Row.css";
import MovieModal from './MovieModal';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper style
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import styled from 'styled-components';

const Row = ({ title, id, fetchUrl }) => {
  const [movies, setMovies] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelection] = useState({})

  const fetchMovieData = useCallback(async () => {
    const response = await axios.get(fetchUrl);
    // console.log('response', response);
    setMovies(response.data.results);
  }, [fetchUrl])

  useEffect(() => {
    fetchMovieData();
  }, [fetchMovieData])

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelection(movie);
  }

  return (
    <Container>
      <h2>{title}</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true} //loop 기능을 사용할 것인지
        navigation // arrow 버튼 사용 유무
        pagination={{ clickable: true }} //페이지 버튼 보이게 할지
        breakpoints={{
          1378: {
            slidesPerView: 6, //한번에 보이는 슬라이드 개수 
            slidesPerGroup: 6,
          },
          998: {
            slidesPerView: 5, //한번에 보이는 슬라이드 개수 
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4, //한번에 보이는 슬라이드 개수 
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3, //한번에 보이는 슬라이드 개수 
            slidesPerGroup: 3,
          },
        }}
      >
        <Content id={id}>
          {movies.map(movie => (
            <SwiperSlide key={movie.id}>
              <Wrap>
                <img
                  key={movie.id}
                  src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                  alt={movie.name}
                  onClick={() => handleClick(movie)}
                />
              </Wrap>
            </SwiperSlide>
          ))}
        </Content>
      </Swiper>


      {modalOpen &&
        <MovieModal
          {...movieSelected}
          setModalOpen={setModalOpen}
        />
      }
    </Container>
  )
}

export default Row

const Container = styled.div`
  padding: 0 0 26px;
`;

const Content = styled.div``;

const Wrap = styled.div`
  width: 95%;
  height: 95%;
  padding-top: 56.25%;
  border-radius: 10px;
  box-shadow: rgb(0 0 0/69%) 0px 26px 30px -10px,
              rgb(0 0 0/73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  border: 3px solid rgba(249, 249, 249, 0.1);

  img {
    inset: 0px;
    display: block;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    position: absolute;
    width: 100%;
    transition: opacity 500ms ease-in-out;
    z-index:1;
  }
  &:hover {
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
       rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    transform: scale(0.98);
    border-color: rgba(249, 249, 249, 0.8);
  }
`;