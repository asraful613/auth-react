import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types'; // ES6
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../Firebase/firebase.config";

export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInuser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    useEffect(()=>{
       const unsubscrive= onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            console.log('observing current user inside useeffect provider',currentUser);
        })
        return ()=>{
            unsubscrive();
        }
    },[])
    
    const AuthInfo={user,createUser,signInuser}
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