import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { FavouritesContentProvider } from './store/favourites-context';

ReactDOM.render(
    <FavouritesContentProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavouritesContentProvider>,
    document.getElementById('root')
);
