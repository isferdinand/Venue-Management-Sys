import { FaBars, FaBell, FaUserCircle } from "react-icons/fa"
import { useNavigate } from "react-router-dom"
import PropTypes from 'prop-types'
// import Login from "../pages/Login/login"



const Navbar = ({ sidebarToggle, setSidebarToggle }) => {
    Navbar.propTypes = {
        setSidebarToggle: PropTypes.func.isRequired,
        sidebarToggle: PropTypes.bool.isRequired
    }

    const navigateTo = useNavigate()
    const navigation = () => {
        return navigateTo('/login')
    }
    return (
        <nav className={`${sidebarToggle ? "" : "ml-64"} bg-gray-800 px-4 py-3 flex justify-between w-full`}>
            <div className="flex items-center text-xl">
                <FaBars className="text-white me-4 cursor-pointer" onClick={() => setSidebarToggle(!sidebarToggle)} />
                <span className="text-white font-semibold">Venue Management</span>
            </div>
            <div className="flex items-center gap-x-5">

                <div className="text-white">
                    <FaBell className="w-6 h-6" />
                </div>
                <div className="relative">
                    <button className="text-white group">
                        <FaUserCircle className="w-6 h-6 mt-1" />
                        <div className="z-10 hidden absolute bg-white rounded-lg shadow w-32 group-focus:block top-full right-0">
                            <ul className="py-2 text-sm text-gray-900">
                                <li onClick={navigation}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    )
}


export default Navbar