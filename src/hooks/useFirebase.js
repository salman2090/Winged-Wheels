import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, updateProfile, signOut, getIdToken } from "firebase/auth";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [admin, setAdmin]= useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [token, setToken]=useState('');

    const auth = getAuth();


    // register user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayName: name};
                setUser(newUser);
                // save user to the database
                saveUser(email, name);
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                  }).then(() => {
                  }).catch((error) => {
                  });
                  
                history.replace('/');
            })
            .catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    // login user
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const destination = location?.state?.from || '/';
            history.replace(destination);
            setUser()
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message);
        })
        .finally(() => setIsLoading(false));
    }

    // observe user state
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
                
              } else {
                // User is signed out
                setUser({})
         
              }
            setIsLoading(false);
          });
          return () => unsubscribe
    }, [auth])

    // set admin data
    useEffect(() => {
        fetch(`https://guarded-chamber-73024.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    },[user.email])
    
    // user signout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(() => setIsLoading(false));          
    }

    // send registered user info in database
    const saveUser = (email, displayName) => {
            const user = {email, displayName};
            fetch('https://guarded-chamber-73024.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(user)
            })
            .then()
    }

    return{
        user,
        isLoading,
        authError,
        admin,
        token,
        registerUser,
        loginUser,
        logOut,
        
    }
}

export default useFirebase;