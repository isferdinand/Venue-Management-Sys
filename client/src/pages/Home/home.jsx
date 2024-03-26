import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa"
import room1 from '../../assets/Room1.jpg'
import axios from 'axios'
// import room2 from '../../assets/Room2.jpg'
// import Hall1 from '../../assets/Hall1.jpg'
// import Hall2 from '../../assets/Hall2.jpg'



const Home = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)

    const [events, setEvents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3002/home') // replace with your API endpoint
            .then(response => {
                console.log(response.data);
                setEvents(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

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
                <div className='flex flex-col items-center gap-3'>
                    {Array.isArray(events) && events.map((event) => (
                        <div className='flex gap-2 items-center justify-evenly rounded-md border-2 border-gray-400 p-2 w-4/5' key={event.eventID}>
                            <div>
                                <img src={room1} alt="event" className=' w-80' />
                            </div>
                            <div className="flex flex-col">
                                <h2 className='text-lg font-bold'><span>{event.venueName}</span></h2>
                                <h3>Event: <span>{event.eventType}</span></h3>
                                <p>Status:<span>{event.status}</span></p>
                                <p>Estimated Attendees: <span>{event.attendees}</span></p>
                                <h3>Time Booked: <span>{(new Date(event.time)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span></h3>
                            </div>
                            <div>
                                <button className='outline:none p-1 bg-red-500 hover:bg-red-400 rounded-md text-white font-semibold'>Cancel Event</button>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default Home