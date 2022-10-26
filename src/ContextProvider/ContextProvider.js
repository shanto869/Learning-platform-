import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../Firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext();
const auth = getAuth(app)

const ContextProvider = ({ children }) => {
    const [user, setUser] = useState('shanto');
    const [loader, setLoader] = useState(true)


    // create user by email and password
    const createUserWithEmail = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // sign in with email and password
    const signInUser = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update profile
    const updateUserProfile = (profile) => {
        setLoader(true)
        return updateProfile(auth.currentUser, profile)
    }

    // sign in with google
    const signInWithGoogle = (googleProvider) => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider)
    }

    // sign in with github 
    const signInWithGitHub = (gitProvider) => {
        setLoader(true)
        return signInWithPopup(auth, gitProvider)
    }


    // sign out 
    const logOut = () => {
        setLoader(true)
        return signOut(auth)
    }

    // track user
    useEffect(() => {
        const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user auth inside state change', currentUser);
            setUser(currentUser);
            setLoader(false)
        })

        return () => unSubcribe()
    }, [])

    const authInfo = { user, loader, createUserWithEmail, signInUser, updateUserProfile, signInWithGoogle, signInWithGitHub, logOut, }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default ContextProvider;