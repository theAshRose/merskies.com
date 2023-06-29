import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Main from './pages/Main';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <Router>
            {/* <Header /> */}
            <Main></Main>
            <Footer />
        </Router>
    )
}

export default App;