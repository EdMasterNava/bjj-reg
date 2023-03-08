import React, { useContext, useEffect, useState } from 'react';
import { auth } from './Firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){
    const [currentUser, setCurrentUser] = useState();
    function register(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])
    const value = {
        currentUser,
        register
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}