// import React from 'react'
import { FaHome, FaCog, FaPlus, FaEdit } from 'react-icons/fa'
import { FaBuildingColumns } from 'react-icons/fa6'

// eslint-disable-next-line react/prop-types
const Sidebar = ({ sidebarToggle }) => {
    return (
        <div className={`${sidebarToggle ? "hidden" : "block"}w-64 bg-gray-800 fixed h-full px-4 py-2`}>
            <div className='my-2 mb-4'>
                <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
            </div>
            <hr />
            <ul className='mt-3 text-white font-bold'>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FaHome className='inline-block w-6 h-6 mr-2 -mt-2'></FaHome>
                        Home
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FaPlus className='inline-block w-6 h-6 mr-2 -mt-2' />
                        New Event
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FaEdit className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Reschedule
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FaBuildingColumns className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Venues
                    </a>
                </li>
                <li className='mb-2 rounded hover:shadow hover:bg-blue-500 py-2'>
                    <a href="" className='px-3'>
                        <FaCog className='inline-block w-6 h-6 mr-2 -mt-2' />
                        Profile & Setting
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar