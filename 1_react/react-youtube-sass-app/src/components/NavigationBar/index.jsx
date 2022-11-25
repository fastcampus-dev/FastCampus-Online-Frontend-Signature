import React, { useContext } from 'react'
import LeftNav from './LeftNav/index'
import SearchBar from './SearchBar/SearchBar'
import RightNav from './RightNav';
import useWindowSize from '../../helpers/useWindowSize';
import { BiArrowBack } from 'react-icons/bi'
import { ImSearch } from 'react-icons/im'
import { MdKeyboardVoice } from 'react-icons/md'
import { SearchContext } from '../../context/SearchContext';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios';

const NavigationBar = () => {

  const { width } = useWindowSize();

  const {
    searchQuery,
    setSearchQuery,
    showSpecialSearchBar,
    setShowSpecialSearchBar,
  } = useContext(SearchContext)

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (searchQuery.input !== '') {
      const response = await axios.get(`/search?part=snippet&maxResults=10&q=${searchQuery.input}`)

      setSearchQuery({
        ...searchQuery,
        videos: response.data.items
      });

      navigate(`/results/${searchQuery.input}`)
    }
  }

  const handleChange = e => {
    setSearchQuery({
      ...searchQuery,
      input: e.target.value
    });
  }

  const specialSearchBarMarkUp = (
    <div className='special_searchbar'>
      <button onClick={() => setShowSpecialSearchBar(false)}>
        <BiArrowBack size={25} />
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text"
          name='search'
          placeholder='Search'
          autoComplete='false'
          onChange={handleChange}
        />
        <button type='submit'>
          <ImSearch size={20} data-tip='Search' data-for='navbar' />
        </button>
      </form>
      <button className='icon-container voiceIcon'>
        <MdKeyboardVoice size={25} data-tip='Search with your voice' data-for='navbar' />
      </button>
    </div>
  )

  return (
    <nav className='Navbar'>
      {
        width <= 640 && showSpecialSearchBar
          ? specialSearchBarMarkUp
          : <>
            <LeftNav />
            <SearchBar onChange={handleChange} onSubmit={handleSubmit} />
            <RightNav />
          </>
      }
    </nav >
  )
}

export default NavigationBar
