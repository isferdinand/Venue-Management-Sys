import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import { FaSearch } from "react-icons/fa"

const Home = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    return (
        <div>
            <div className="flex">
                <Sidebar sidebarToggle={sidebarToggle} />
                <Navbar
                    sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle}
                />
            </div>
            <div className="ml-64 flex flex-col" >
                <div className="md:w-65 flex items-center justify-center mb-3">
                    <span className="flex items-center pl-2">
                        <button className="pr-1 text-lg focus:outline-none text-white md:text-black"><FaSearch /></button>
                    </span>
                    <input type="text" name="search" id="search" placeholder='Search event...' className="w-3/4 px-4 py-1 pl-12 border-b-2 border-b-gray-600 rounded shadow outline-none hidden md:block mt-2" />
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex gap-2 border-2 border-red-500'>
                        <h3 className='text-lg font-bold'>Hall A</h3>
                        <h3>Lecture</h3>
                        <h3>12th Feb 2023, 10:00</h3>
                    </div>
                    <div className='flex gap-2 border-2 border-red-500'>
                        <h3 className='text-lg font-bold'>Hall A</h3>
                        <h3>Lecture</h3>
                        <h3>12th Feb 2023, 10:00</h3>
                    </div>
                    <div className='flex gap-2 border-2 border-red-500'>
                        <h3 className='text-lg font-bold'>Hall A</h3>
                        <h3>Lecture</h3>
                        <h3>12th Feb 2023, 10:00</h3>
                    </div>
                    <div className='flex gap-2 border-2 border-red-500'>
                        <h3 className='text-lg font-bold'>Hall A</h3>
                        <h3>Lecture</h3>
                        <h3>12th Feb 2023, 10:00</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home