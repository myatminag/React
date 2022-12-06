import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import Layout from './components/layout/Layout';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route exact path='/' element={<AllMeetupsPage />} />
        <Route path='/newMeetups' element={<NewMeetupsPage />} />
        <Route path='/favourites' element={<FavouritesPage />} />
      </Routes>
    </Layout>
  );
};

export default App;