import React, { createContext } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from "firebase/auth";


export const AuthContext = createContext();

const auth = getAuth(app);

const UseContext = ({children}) => {

    //google provider
    const googleProvider = new GoogleAuthProvider();

    //google login
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const user = {displayName: "Habib"};
    const authInfo = { user, createUser}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UseContext;