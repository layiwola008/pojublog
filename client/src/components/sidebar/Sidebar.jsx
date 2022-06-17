import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import axios from "axios";

const myPic = "https://media-exp1.licdn.com/dms/image/C5603AQEsmsluG_URIw/profile-displayphoto-shrink_200_200/0/1616203859693?e=1655337600&v=beta&t=I4XuaR82WyTHOSpTkR6mr4UWGM5iiGoX3yq1YM966fQ";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("api/categories");
            setCats(res.data);
        };
        getCats();
    },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src={myPic} alt="" />
            <p>Software Engineer with strong penchant for building applications capable enough to change social realities for the best.</p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
        
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                {/* <i className="sidebarIcon fa-brands fa-facebook"></i>
                <i className="sidebarIcon fa-brands fa-twitter"></i>
                <i className="sidebarIcon fa-brands fa-pinterest"></i>
                <i className="sidebarIcon fa-brands fa-instagram-square"></i> */}

            <a  href="https://web.facebook.com/adepoju.sulaiman">
                <i className="sidebarIcon fa-brands fa-facebook"></i>
            </a>
            <a href="https://twitter.com/layideveloper">
                <i className="sidebarIcon fa-brands fa-twitter"></i>
            </a>
            
            {/* <i className="topIcon fa-brands fa-pinterest"></i> */}
            <a href="https://www.instagram.com/layi_coder/">
                <i className="sidebarIcon fa-brands fa-instagram-square"></i>
            </a>
            </div>
        </div>
    </div>
  ) 
}
