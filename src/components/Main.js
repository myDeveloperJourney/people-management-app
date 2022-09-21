import { useState, useEffect } from 'react';

import { Routes, Route } from 'react-router-dom';

import Index from '../pages/Index';
import Show from '../pages/Show';

function Main(props) {
    
    const [ people, setPeople ] = useState(null);

    const API_URL = 'http://localhost:4000/api/people/';

    const getData = async () => {
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setPeople(data);
        } catch (error) {
            console.log(error);
            // TODO: add some logic to alert the user,
            // that something went wrong here
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <main>
            <Routes>
                <Route path="/" element={<Index people={people} />} />
                <Route path="/people/:id" element={<Show />} />
            </Routes>
        </main>
    );
}

export default Main;