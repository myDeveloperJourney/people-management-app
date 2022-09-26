import { useState, useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import Index from '../pages/Index';
import Show from '../pages/Show';


function PrivatePageContainer({ children, user }) {
    return user ? children : <Navigate to="/" />
}


function Main({ user }) {
    
    const [ people, setPeople ] = useState(null);

    const API_URL = 'http://localhost:4000/api/people/';

    const getData = async () => {
        
        if(!user) return; // do not run this function unless a user is logged in

        try {

            const token = await user.getIdToken();
            const response = await fetch(API_URL, {
                method: 'GET',
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            });
            const data = await response.json();
            setPeople(data);
        } catch (error) {
            console.log(error);
            // TODO: add some logic to alert the user,
            // that something went wrong here
        }
    };

    const createPeople = async (person) => {
        if(!user) return;

        try {
            const token = await user.getIdToken();
            await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-type': 'Application/json',
                    'Authorization': 'Bearer ' + token
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

    const deletePeople = async (id) => {
        try {
            await fetch(API_URL + id, {
                method: 'DELETE'
            });
            getData();
        } catch (error) {
            console.log(error);
            // TODO: add some logic to alert the user,
            // that something went wrong here
        }
    }

    const updatePeople = async (updatedPerson, id) => {
        try {
            await fetch(API_URL + id, {
                method: 'PUT',
                headers: {
                    'Content-type': 'Application/json'
                },
                body: JSON.stringify(updatedPerson)
            });
            
            getData();

        } catch (error) {
            console.log(error)
            // TODO: add additional logic to alert a user 
            // in case something goes wrong
        }
    }

    useEffect(() => {
        if(user) {
            getData();
        } else {
            setPeople(null);
        }
    }, [user]);

    return (
        <main>
            <Routes>
                <Route path="/" element={
                    <Index 
                        user={user}
                        people={people} 
                        createPeople={createPeople} 
                    />
                } />
                <Route path="/people/:id" element={
                    <PrivatePageContainer user={user}>
                        <Show 
                            people={people}
                            deletePeople={deletePeople}
                            updatePeople={updatePeople} 
                        />
                    </PrivatePageContainer>
                } />
            </Routes>
        </main>
    );
}

export default Main;