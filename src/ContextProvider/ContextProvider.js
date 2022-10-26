import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState('shanto');


    // create user by email and password
    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    // sign in with google
    const signInWithGoogle = (googleProvider) => {
        return signInWithPopup(auth, googleProvider)
    }

    // sign in with github 
    const signInWithGitHub = (gitProvider) => {
        return signInWithPopup(auth, gitProvider)
    }


    // sign out 
    const logOut = () => {
        return signOut(auth)
    }

    // track user
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user auth inside state change', currentUser);
            setUser(currentUser)
        })

        return () => unSubcribe()
    }, [])

    const authInfo = { user, createUserWithEmail, updateUserProfile, signInWithGoogle, signInWithGitHub, logOut }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;