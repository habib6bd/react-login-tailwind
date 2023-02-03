import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UseContext';

const Header = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <div className="navbar bg-neutral text-neutral-content">
                <Link to="/" className="btn btn-ghost normal-case text-xl">Auth context </Link>
                <Link to="/login" className="btn btn-ghost normal-case text-xl">Login </Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">Registration </Link>
                <Link to="/register" className="btn btn-ghost normal-case text-xl">{user.displayName} </Link>
            </div>
        </div>  
    );
};

export default Header; 