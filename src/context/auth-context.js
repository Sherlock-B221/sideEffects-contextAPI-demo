import React from 'react';


//AuthContxt will be an object that will contain a component/(s)
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},

});
export default AuthContext;