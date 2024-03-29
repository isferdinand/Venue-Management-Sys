import { FaHome, FaCog, FaPlus, FaEdit } from 'react-icons/fa'
import { FaBuildingColumns } from 'react-icons/fa6'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'


const Sidebar = ({ sidebarToggle }) => {
    Sidebar.propTypes = {
        sidebarToggle: PropTypes.bool.isRequired
    }
    return (
        <div className={`${sidebarToggle ? "hidden transition-hidden duration-700 ease-in" : "block transition-all duration-700 ease-in"} w-64 bg-gray-800 fixed h-full px-4 py-2 `}>
            <div className='my-2 mb-3'>
                <h1 className="text-xl text-white font-bold">Admin Dashboard</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link to={'/home'} className='px-3'>
                        <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                        Home
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link to={'/addevent'} className='px-3'>
                        <FaPlus className='inline-block w-6 h-6 mr-2 -mt-2' />
                        New Event
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link to={'/reschedule'} className='px-3'>
                        <FaEdit className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Reschedule
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link to={'/venues'} className='px-3'>
                        <FaBuildingColumns className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Venues
                    </Link>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <Link to={'/profile'} className='px-3'>
                        <FaCog className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Profile & Setting
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar