import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './css/master.css'
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';
import Twitch from './components/Twitch';

function App() {
    return (
        <Router>
            <body>
            <Header />
            <Main>
                
            </Main>
            <Footer />
            </body>
        </Router>
    )
}

export default App;