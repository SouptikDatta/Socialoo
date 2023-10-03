import "./navbar.scss";
import CottageIcon from '@mui/icons-material/Cottage';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {

  const { toggle, darkMode } = useContext(DarkModeContext);
  
  return (
    <div className="navbar">
        <div className="left">
            <Link to="/" style={{textDecoration:"none"}}>
                <span>Socialoo.</span>
            </Link>

            <CottageIcon/>

            {darkMode ? (<WbSunnyOutlinedIcon onClick={toggle} />) : (<DarkModeIcon  onClick ={toggle}/> )}

            <GridViewOutlinedIcon/>

            <div className="search">
                <SearchOutlinedIcon/>
                <input type="text" placeholder="Search..."/>
            </div>
        </div>

        <div className="right">
            <div className="icons">
                <PersonOutlinedIcon/>
                <EmailOutlinedIcon/>
                <NotificationsOutlinedIcon />
            </div>
            <div className="user">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
                <span>Souptik</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar