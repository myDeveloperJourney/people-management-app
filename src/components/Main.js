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
    };

    const createPeople = async (person) => {
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(person)
            });
            
            // after we create a new person with the code above 👆
            getData();
            // we call getData to get an updated list of people

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
                <Route path="/" element={
                    <Index 
                        people={people} 
                        createPeople={createPeople} 
                    />
                } />
                <Route path="/people/:id" element={<Show />} />
            </Routes>
        </main>
    );
}

export default Main;