import React, {useEffect, useState} from 'react';


//AuthContext will be an object that will contain a component/(s)
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email,password) => {},

});

export  const AuthContextProvider = (props) => {
    const [isLoggedIn,setIsLoggedIn] = useState(false);


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
    useEffect(() => {
        const userLoggedInInfo = localStorage.getItem('isLoggedIn');
        if (userLoggedInInfo === 'true')
            setIsLoggedIn(true);
    }, []);


    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
    }}>{props.children}</AuthContext.Provider>
}

export default AuthContext;