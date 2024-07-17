import { NavLink } from "react-router-dom";
import './HeaderComponent';
import './HeaderComponent.css'
export default function HeaderComp()
{
    return(
        <>
        <div className="heade">
        <img style={{"width":"1000px",}} src="public/image/icon.png" alt="headerlogo" />
        <p>
            <NavLink id="h1" to="/">Home</NavLink>
            <NavLink id="h1" to="/about">AboutUs</NavLink>
            <NavLink id="h1" to="/Course">Course</NavLink>
            <NavLink id="h1" to="/Contact">Contact</NavLink>
        </p>
        </div>
        </>
    )
}