//Libraries
import { createContext, useState, useEffect } from 'react';
//Services
import firebase from '../services/firebase';
//Context
export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingAuth, setLoadingAuth] = useState(false);

    useEffect(() => {
        function loadStorage() {
            const storageUser = localStorage.getItem('@WhatsAppClone');
            if (storageUser) {
                setUser(JSON.parse(storageUser));
                setLoading(false);
            }
            setLoading(false);
        }
        loadStorage()
    }, [])

    function storageUser(data) {
        localStorage.setItem('@WhatsAppClone', JSON.stringify(data));
    }

    async function createUser(user) {
        console.log("user id:", user.id)
        await firebase
        .firestore()
        .collection('users')
        .doc(user.id)
        .set(user, { merge: true })
    }

    async function githubSignIn() {
        setLoadingAuth(true);
        const provider = new firebase.auth.GithubAuthProvider();
        let { user } = await firebase.auth().signInWithPopup(provider);

        if(user){
            let data = {
                id: user.uid,
                name: user.displayName,
                avatar: user.photoURL,
            }
            createUser(data);
            setUser(data);
            storageUser(data);
            setLoadingAuth(false)
        }
    }

    async function signOut() {
        await firebase.auth().signOut();
        localStorage.removeItem("@WhatsAppClone");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            loadingAuth,
            signOut,
            setUser,
            storageUser,
            githubSignIn,
        }}>
            {children}
        </AuthContext.Provider>
    );
}