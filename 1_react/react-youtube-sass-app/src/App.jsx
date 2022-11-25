import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import VideoPage from './pages/VideoPage';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import MainPage from './pages/MainPage';
import SearchedVidoesPage from './pages/SearchedVideosPage';

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <SideBar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='/results/:input' element={<SearchedVidoesPage />} />
          <Route path='/video/:videoId' element={<VideoPage />} />
        </Route>
      </Routes>
    </React.Fragment >
  );
}

export default App;

