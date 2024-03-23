import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import PropTypes from 'prop-types'

import room1 from '../../assets/Room1.jpg'
import room2 from '../../assets/Room2.jpg'
import room3 from '../../assets/Room3.jpg'
import Hall1 from '../../assets/Hall1.jpg'
import Hall2 from '../../assets/Hall2.jpg'
import Hall3 from '../../assets/Hall3.jpg'

const Venues = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    Venues.propTypes = {
        setSidebarToggle: PropTypes.func.isRequired,
        sidebarToggle: PropTypes.bool.isRequired
    }
    return (
        <div>
            <div className="flex">
                <Sidebar sidebarToggle={sidebarToggle} />
                <Navbar sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle} />
            </div>
            <div className="ml-64 flex flex-col items-center mt-10">
                <h1 className="text-3xl font-bold mb-2">Venues</h1>
                <div className='flex flex-wrap gap-3 ml-6'>
                    <div className='p-2 border-2 border-gray-600 rounded-sm'>
                        <img src={room1} alt="room1" className=' w-96' />
                        <div>
                            <h2>Location: Building A</h2>
                            <p>Capacity: 200</p>
                            <p>Status: Booked</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-600 p-2 rounded-sm'>
                        <img src={room3} alt="room3" className='w-96' />
                        <div>
                            <h2>Location: Building A</h2>
                            <p>Capacity: 400</p>
                            <p>Status: Vacant</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-600 p-2 rounded-sm'>
                        <img src={Hall1} alt="hall1" className='w-96' />
                        <div>
                            <h2>Location: Building B</h2>
                            <p>Capacity: 800</p>
                            <p>Status: Booked</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-600 p-2 rounded-sm'>
                        <img src={Hall2} alt="hall2" className='w-96' />
                        <div>
                            <h2>Location: Building A</h2>
                            <p>Capacity: 1000</p>
                            <p>Status: Vacant</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-600 p-2 rounded-sm'>
                        <img src={room2} alt="room2" className='w-96' />
                        <div>
                            <h2>Location: Building A</h2>
                            <p>Capacity: 1000</p>
                            <p>Status: Vacant</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-600 p-2 rounded-sm'>
                        <img src={Hall3} alt="hall3" className='w-96' />
                        <div>
                            <h2>Location: Building B</h2>
                            <p>Capacity: 2000</p>
                            <p>Status: Booked</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venues