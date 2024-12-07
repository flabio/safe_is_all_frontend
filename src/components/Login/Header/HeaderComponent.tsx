import { Link } from "react-router-dom";
import "./header.css";
import { Box, TextField } from "@mui/material";

export const HeaderComponent = () => {
  const authStatus = localStorage.getItem('token') ? 'authenticated' : 'not-authenticated';

  return (
    <div className="header">
      <div className="logo-header">
        <img src="/public/img/ogo.png" alt="All Is Safe" />
        <div className="search-container">
  <input
    type="text"
    placeholder="Search courses..."
    className="search-input"
  />
 
</div>
  </div>
     
      {authStatus === 'not-authenticated' ? (
        <Link to="/auth/login" className="btn btn-primary btn-login">
          Login
        </Link>
      ) : (
        <Link to="/" className="btn btn-primary btn-logout">
          Home
        </Link>
      )}
     
    </div>
    
  );
};
