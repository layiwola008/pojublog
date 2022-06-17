import { Link } from "react-router-dom";
import React, { useContext } from 'react';
import "./topbar.css";
import { Context } from "../../context/Context";

export default function TopBar() {
    const { user, dispatch } = useContext(Context);
    const PF = "../../../../images/"

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    }
  return (
    <div className="top">
        <div className='topLeft'>
            <a  href="https://web.facebook.com/adepoju.sulaiman">
                <i className="topIcon fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/layideveloper">
                <i className="topIcon fa-brands fa-twitter"></i>
            </a>
            
            {/* <i className="topIcon fa-brands fa-pinterest"></i> */}
            <a href="https://www.instagram.com/layi_coder/">
                <i className="topIcon fa-brands fa-instagram-square"></i>
            </a>
            
        </div>
        <div className='topCenter'>
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                {/* <li className="topListItem">
                    <Link className="link" to="/">ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/">CONTACT</Link>
                </li> */}
                <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="topListItem" onClick={handleLogout}>
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>
        <div className='topRight'>
            {
                user ? (
                    <Link to="/settings">
                        <img className="topImage" src={PF+user.profilePic} alt="" />
                    </Link>
                    
                ) : (
                    <ul className="topList">
                        <li className="topListItem auth">
                            <Link className="link" to="/login">Login</Link>
                        </li>
                        <li className="topListItem auth">
                            <Link className="link" to="/register">Register</Link>
                        </li>
                    </ul>
                )
            }
          
            {/* <i className="topSearchIcon fa-solid fa-magnifying-glass"></i> */}
        </div>
    </div>
  )
}
