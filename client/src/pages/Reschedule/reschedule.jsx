import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

import room1 from '../../assets/Room1.jpg'
import room2 from '../../assets/Room2.jpg'
import Hall1 from '../../assets/Hall1.jpg'
import Hall2 from '../../assets/Hall2.jpg'


const Reschedule = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <Navbar />
            </div>
            <div className='ml-64 flex flex-col items-center gap-3 mt-16'>
                <div className='flex gap-4 items-center justify-evenly rounded-md border-2 border-gray-400 p-2 w-4/5'>
                    <div>
                        <img src={room1} alt="event" className='w-80' />
                    </div>
                    <div className="flex flex-col">
                        <h2 className='text-lg font-bold'>Room 1</h2>
                        <h3>Lecture</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste veritatis !</p>
                        <p>Estimated Attendees: 50</p>
                        <h3>12th Feb 2023, 10:00</h3>
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
                        <h3>Workshop</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores voluptatem </p>
                        <p>Estimated Attendees: 200</p>
                        <h3>12th Feb 2023, 10:00</h3>
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
                        <h2 className='text-lg font-bold'>Hall B</h2>
                        <h3>Performance</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, possimus</p>
                        <p>Estimated Attendees: 1000</p>
                        <h3>12th Feb 2023, 10:00</h3>
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
                        <h2 className='text-lg font-bold'>Hall A</h2>
                        <h3>Conference</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dolor!</p>
                        <p>Estimated Attendees: 400</p>
                        <p>12th Feb 2023, 10:00</p>
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