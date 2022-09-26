import { useState, useEffect } from 'react';
import { auth } from './firebase';
import Header from './components/Header';
import Main from './components/Main';
import './App.css';

function App() {
  const [ user, setUser ] = useState(null);

  useEffect(() => {
    // we will set up functionality
    // to watch for logged users
    auth.onAuthStateChanged((userObjOrNull) => setUser(userObjOrNull))
    // if a user logs in, we'll set them into state
    // if a user logs out, we'll unset them from state
  }, []);

  return (
    <div className="App">
      <Header user={user} />
      <Main />
    </div>
  );
}

export default App;
