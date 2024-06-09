import { NavLink } from "react-router-dom"
import "./sidebar.css"
const Sidebar =() =>{
    return(
        <>
        <div className="sidebar">
        <NavLink to="/main" className="navlink">
            Products
        </NavLink>
        <NavLink to="/main/cars" className="navlink">
            Cars
        </NavLink>
        <NavLink to="/main/todos" className="navlink">
            Todos
        </NavLink>
        </div>
        </>
    )
}
export default Sidebar