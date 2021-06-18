import React, {useState, useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from "./context/auth-context";

function App() {
    // const userLoggedInInfo =  localStorage.getItem('isLoggedIn');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // if (userLoggedInInfo === 'true')
    //     setIsLoggedIn(true);    This will result in infinite loop bcz
    //                             everytime it re-renders , it will re-render
    //                             again on this if check
    useEffect(() => {
        const userLoggedInInfo = localStorage.getItem('isLoggedIn');
        if (userLoggedInInfo === 'true')
            setIsLoggedIn(true);
    }, []);
    // useEffect runs after the function execution only if dependencies change


    const loginHandler = (email, password) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    };

    return (

        //AuthContext is a object containing components
        <AuthContext.Provider value={{
            isLoggedIn: isLoggedIn,
            onLogout: logoutHandler,
        }}> //whichever components it wraps,
            can use the context

            <MainHeader isAuthenticated={isLoggedIn}
                        onLogout={logoutHandler}/>
            <main>
                {!isLoggedIn && <Login onLogin={loginHandler}/>}
                {isLoggedIn && <Home onLogout={logoutHandler}/>}
            </main>

        </AuthContext.Provider>


    );
}

export default App;
