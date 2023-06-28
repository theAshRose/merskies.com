import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Main from './pages/Main';

function App() {
    return (
        <Router>
            <Main></Main>
        </Router>
    )
}

export default App;