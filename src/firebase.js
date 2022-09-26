// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { 
    signOut, 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxqCOgXXU2KqW6Z8qTmTEIDNcn-E9SoaE',
  authDomain: 'people-management-project.firebaseapp.com',
  projectId: 'people-management-project',
  storageBucket: 'people-management-project.appspot.com',
  messagingSenderId: '1063671007103',
  appId: '1:1063671007103:web:b822b7cf14ab2628f27c4a'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth object
const auth = getAuth(app);

// config our provider
const provider = new GoogleAuthProvider();

// set up login function
function login() {
    return signInWithPopup(auth, provider);
}

// set up logout function
function logout() {
    return signOut(auth);
}

// export our functionality to be used within our components
export { auth, login, logout };