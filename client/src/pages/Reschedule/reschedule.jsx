import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import PropTypes from 'prop-types'
import { useState } from 'react'

import room1 from '../../assets/Room1.jpg'
import room2 from '../../assets/Room2.jpg'
import Hall1 from '../../assets/Hall1.jpg'
import Hall2 from '../../assets/Hall2.jpg'


const Reschedule = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)

    Reschedule.propTypes = {
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
            <div className='ml-64 flex flex-col items-center gap-3 mt-16'>
                <div className='flex gap-4 items-center justify-evenly rounded-md border-2 border-gray-400 p-2 w-4/5'>
                    <div>
                        <img src={room1} alt="event" className='w-80' />
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-lg font-bold'>Room 2</h2>
                        <h3>Event: <span className='font-semibold'>Lecture</span></h3>
                        <p>Status:<span className='font-semibold'>Confirmed</span></p>
                        <p>Estimated Attendees: <span className='font-semibold'>200</span></p>
                        <h3>Time Booked:<span className='font-semibold'>12th Feb 2023, 11:00</span></h3>
                    </div>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <button className='outline:none p-1 bg-red-500 hover:bg-red-300 rounded-md text-white font-semibold'>Reschedule</button>
                            <button className='outline:none p-1 bg-red-500 hover:bg-red-300 rounded-md text-white font-semibold'> Remove Event</button>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 items-center justify-evenly rounded-md border-2 border-gray-400  p-2 w-4/5'>
                    <div className=''>
                        <img src={room2} alt="event" className='w-80' />
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-lg font-bold'>Room 2</h2>
                        <h3>Event: <span className='font-semibold'>Lecture</span></h3>
                        <p>Status:<span className='font-semibold'>Confirmed</span></p>
                        <p>Estimated Attendees: <span className='font-semibold'>200</span></p>
                        <h3>Time Booked:<span className='font-semibold'>12th Feb 2023, 11:00</span></h3>
                    </div>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <button className='outline:none p-1 bg-red-500 hover:bg-red-300 rounded-md text-white font-semibold'>Reschedule</button>
                            <button className='outline:none p-1 bg-red-500 hover:bg-red-300 rounded-md text-white font-semibold'> Remove Event</button>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 items-center justify-evenly rounded-md border-2 border-gray-400  p-2 w-4/5'>
                    <div>
                        <img src={Hall2} alt="event" className=' w-80' />
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-lg font-bold'>Room 2</h2>
                        <h3>Event: <span className='font-semibold'>Lecture</span></h3>
                        <p>Status:<span className='font-semibold'>Confirmed</span></p>
                        <p>Estimated Attendees: <span className='font-semibold'>200</span></p>
                        <h3>Time Booked:<span className='font-semibold'>12th Feb 2023, 11:00</span></h3>
                    </div>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <button className='outline:none p-1 bg-red-500 hover:bg-red-300 rounded-md text-white font-semibold'>Reschedule</button>
                            <button className='outline:none p-1 bg-red-500 hover:bg-red-300 rounded-md text-white font-semibold'> Remove Event</button>
                        </div>
                    </div>
                </div>
                <div className='flex gap-4 items-center justify-evenly rounded-md border-2 border-gray-400  p-2 w-4/5'>
                    <div>
                        <img src={Hall1} alt="event" className='w-80' />
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-lg font-bold'>Room 2</h2>
                        <h3>Event: <span className='font-semibold'>Conference</span></h3>
                        <p>Status:<span className='font-semibold'>Confirmed</span></p>
                        <p>Estimated Attendees: <span className='font-semibold'>200</span></p>
                        <h3>Time Booked:<span className='font-semibold'>12th Feb 2023, 11:00</span></h3>
                    </div>
                    <div>
                        <div className='flex flex-col gap-4'>
                            <button className='outline:none p-1 bg-red-500 hover:bg-red-300 rounded-md text-white font-semibold'>Reschedule</button>
                            <button className='outline:none p-1 bg-red-500 hover:bg-red-300 rounded-md text-white font-semibold'> Remove Event</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reschedule