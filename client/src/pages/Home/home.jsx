import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react'
import { FaSearch } from "react-icons/fa"
import axios from 'axios'

import room1 from '../../assets/Room1.jpg'
import room2 from '../../assets/Room2.jpg'
import room3 from '../../assets/Room3.jpg'
import Hall1 from '../../assets/Hall1.jpg'
import Hall2 from '../../assets/Hall2.jpg'
import Hall3 from '../../assets/Hall3.jpg'



const Home = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')

    const venueImages = {
        'Room 1': room1,
        'Room 2': room2,
        'Room 3': room3,
        'Hall 1': Hall1,
        'Hall 2': Hall2,
        'Hall 3': Hall3
    };

    useEffect(() => {
        axios.get('http://localhost:3002/home')
            .then(response => {
                setEvents(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

    const deleteEvent = (id) => {
        axios.delete(`http://localhost:3002/home/${id}`)
            .then(response => {
                console.log(response.data);
                // Remove the deleted event from the local state
                setEvents(events.filter(event => event.eventID !== id));
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    };

    // const searchEvents = (e) => {
    //     setSearchTerm(e.target.value)
    // }

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value)
    }

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
                    <input type="text" name="search" id="search" placeholder='Search event...' className="w-3/4 px-4 py-1 pl-12 border-b-2 border-b-gray-600 rounded shadow outline-none hidden md:block mt-2" onChange={handleSearchChange} />
                </div>
                <div className='flex flex-col items-center gap-3'>
                    {Array.isArray(events) && events.filter((event => event.venueName.toLowerCase().includes(searchTerm.toLowerCase()))).length > 0 ? (events.filter((event => event.venueName.toLowerCase().includes(searchTerm.toLowerCase()))).map((event) => (
                        <div className='flex gap-2 items-center justify-evenly rounded-md border-2 border-gray-400 p-2 w-4/5' key={event.eventID}>
                            <div>
                                <img src={venueImages[event.venueName]} alt="venue image" className=' w-80' />
                            </div>
                            <div className="flex flex-col">
                                <h2 className='text-lg font-bold'><span className='font-semibold'>{event.venueName}</span></h2>
                                <h3>Event: <span className='font-semibold'>{event.eventType}</span></h3>
                                <p>Status:<span className='font-semibold'>{event.status}</span></p>
                                <p>Estimated Attendees: <span className='font-semibold'>{event.attendees}</span></p>
                                <h3>Time Booked: <span className='font-semibold'>{(new Date(event.time)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</span></h3>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <button className='outline:none p-1 bg-red-500 hover:bg-red-400 rounded-md text-white font-semibold' onClick={() => deleteEvent(event.eventID)}>Cancel Event</button>
                                <button className='outline:none p-1 bg-red-500 hover:bg-red-400 rounded-md text-white font-semibold' onClick={() => deleteEvent(event.eventID)}>Cancel Event</button>
                            </div>
                        </div>
                    ))
                    ) : (
                        <p className='font-bold mt-20 '>There are no upcoming events</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Home