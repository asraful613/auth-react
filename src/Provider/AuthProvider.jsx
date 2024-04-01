import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import {GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPhoneNumber, signOut } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext=createContext(null);
const googleProvider=new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInuser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signInWithGoogle=()=>{
        setLoading(true)
        return signInWithPhoneNumber(auth,googleProvider)
    }
    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
    }
    useEffect(()=>{
       const unsubscrive= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false)
            console.log('observing current user inside useeffect provider',currentUser);
        })
        return ()=>{
            unsubscrive();
        }
    },[])
    
    const AuthInfo={user,createUser,signInuser,logOut,loading,signInWithGoogle}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.PropTypes={
    children:PropTypes.node
}