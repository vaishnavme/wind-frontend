import { NavLink } from "react-router-dom"

export const Navlinks = ({link, icon, linkName}) => {

    const activeStyle = {
        color: "#007aff",
        backgroundColor: "#F9FAFB"
    }

    return (
        <NavLink to={link} activeStyle={activeStyle} className="flex items-center p-2 hover:bg-blue-50" end>
            <i className={`bx bx-${icon} text-xl`}></i>
            <span className="text-base whitespace-nowrap ml-4">{linkName}</span>
        </NavLink>
    )
}