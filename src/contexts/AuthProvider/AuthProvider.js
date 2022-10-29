import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }



    useEffect(() => {
        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user-----', currentUser)
            // setUser(currentUser);

            //for verfied email-->
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser);
            }
            //----<-
            setLoading(false)
        })
        return () => {
            unsubcribe()
        }
    }, [])



    const providerLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }


    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }

    const verifyEmail = () => {
        return sendEmailVerification(auth.currentUser);
    }



    const authInfo = {
        user,
        providerLogin,
        logOut,
        createUser,
        signIn,
        loading,
        setLoading,
        updateUserProfile,
        verifyEmail

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;