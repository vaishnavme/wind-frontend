import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <nav className="flex justify-between p-2">
            <div className="flex items-center">
                <i className='bx bx-wind transform -rotate-90 text-2xl'></i>
                <div className="text-xl font-light mx-4">Hyper</div>
            </div>
            <div className="flex items-center">
                <ul className="flex text-xl font-thin">
                    <li className="mx-2">
                        <Link to="/"><i className='bx bx-home-circle font-thin'></i></Link>
                    </li>
                    <li className="mx-2">
                        <i className='bx bx-bell font-thin'></i>
                    </li>
                    <li className="mx-2">
                        <i className='bx bx-user'></i>
                    </li>
                </ul>
            </div>
        </nav>
    )
}