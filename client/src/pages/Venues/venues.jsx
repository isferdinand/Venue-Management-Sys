import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import { useState, useEffect } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types'

import room1 from '../../assets/Room1.jpg'
import room2 from '../../assets/Room2.jpg'
import room3 from '../../assets/Room3.jpg'
import Hall1 from '../../assets/Hall1.jpg'
import Hall2 from '../../assets/Hall2.jpg'
import Hall3 from '../../assets/Hall3.jpg'

const Venues = () => {
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const [venues, setVenues] = useState([]);

    Venues.propTypes = {
        setSidebarToggle: PropTypes.func.isRequired,
        sidebarToggle: PropTypes.bool.isRequired
    }

    const venueImages = {
        'Room 1': room1,
        'Room 2': room2,
        'Room 3': room3,
        'Hall 1': Hall1,
        'Hall 2': Hall2,
        'Hall 3': Hall3
    };

    useEffect(() => {
        axios.get('http://localhost:3002/venues')
            .then(response => {
                setVenues(response.data);
                // console.log(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

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
                    {venues.map(venue => (
                        <div className='p-2 border-2 border-gray-600 rounded-sm' key={venue.venueID}>
                            {/* <img src={room1} alt="room1" className=' w-96' /> */}
                            <img src={venueImages[venue.venueName]} alt={venue.venueName} className='w-96' />
                            <div>
                                <div>
                                    <h2>Venue Name: <span className='font-semibold'>{venue.venueName}</span></h2>
                                    <h2>Location: <span className='font-semibold'>{venue.location}</span></h2>
                                    <p>Capacity: <span className='font-semibold'>{venue.capacity} </span> </p>
                                    <p>Status: <span className='font-semibold'>{venue.Status}</span> </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Venues