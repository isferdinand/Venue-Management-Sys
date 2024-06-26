import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import Axios from 'axios';
import axios from 'axios';

const AddEvent = () => {
    AddEvent.propTypes = {
        setSidebarToggle: PropTypes.func.isRequired,
        sidebarToggle: PropTypes.bool.isRequired
    }
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const [attendees, setAttendees] = useState(0)
    const [eventName, setEventName] = useState('')
    const [selectedVenue, setSelectedVenue] = useState('')
    const [time, setTime] = useState('')

    // const assignVenue = (attendees) => {
    //     let venue = '';

    //     if (attendees === 0) {
    //         venue = '';
    //     } else if (attendees >= 1 && attendees <= 50) {
    //         venue = 'Room 1';
    //     } else if (attendees >= 51 && attendees <= 200) {
    //         venue = 'Room 2';
    //     } else if (attendees >= 201 && attendees <= 500) {
    //         venue = 'Room 3';
    //     } else if (attendees >= 501 && attendees <= 1500) {
    //         venue = 'Hall 1';
    //     } else if (attendees >= 1501 && attendees <= 3000) {
    //         venue = 'Hall 2';
    //     } else if (attendees > 3000) {
    //         venue = 'Hall 3';
    //     }
    //     return venue;
    // }

    useEffect(() => {
        const fetchVenue = async () => {
            const venueName = await assignVenue(attendees);
            setSelectedVenue(venueName);
        };

        fetchVenue();
    }, [attendees]);

    const assignVenue = async (attendees) => {
        try {
            const response = await axios.get('http://localhost:3002/addevent');
            const venues = response.data;
            console.log(response.data);

            // Sort venues by capacity in ascending order
            venues.sort((a, b) => a.capacity - b.capacity);

            // Find the first venue that can accommodate the attendees
            const venue = venues.find(v => v.capacity >= attendees);

            // If no venue is found and attendees are more than 5000, assign to Hall 3
            if (!venue && attendees > 5000) {
                return 'Hall 3';
            }

            return venue ? venue.venueName : '';
        } catch (error) {
            console.error('Error fetching venue capacities: ', error);
            return '';
        }
    };

    const clearFormInputs = () => {
        setEventName('');
        setAttendees(0);
        setTime('');
    };

    const addNewEvent = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:3002/addevent', {
            eventName: eventName,
            attendees: attendees,
            time: time,
            venue: selectedVenue
        }).then((response) => {
            if (response.data.message === 'Venue not found!') {
                alert('Event not added!')

            } else {
                alert('Event added succesfully')
                clearFormInputs()
                console.log(response);
            }

        })

    }
    return (
        <div className=''>
            <div className="flex">
                <Sidebar sidebarToggle={sidebarToggle} />
                <Navbar sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle} />
            </div>
            <div className=" m-0 mx-auto mt-8 max-w-md md:mx-w-sm md:mx-auto">
                <div className="p-4   bg-gray-800 border-2 border-red-600 rounded-md">
                    <form action="" >
                        <h2 className="text-xl text-white text-center font-bold p-1 mb-2">New Event</h2>
                        <div className="mb-2">
                            <label htmlFor="event" className='block w-full text-xl text-white font-semibold'>Event: </label>
                            <select name="event" className='p-0.5 rounded-sm bg-gray-100 focus:outline-none w-5/6' value={eventName}
                                onChange={(e) => setEventName(e.target.value)}>
                                <option value=""></option>
                                <option value="Lecture">Lecture</option>
                                <option value="Seminar">Seminar</option>
                                <option value="Workshop">Workshop</option>
                                <option value="Conference">Conference</option>
                                <option value="Career Fair">Career Fair</option>
                                <option value="Entertainment">Entertainment</option>
                            </select>
                        </div>
                        <div className="mb-2">
                            <label htmlFor="attendees" className='block w-full text-xl text-white font-semibold'>No of attendees:</label>
                            <input className='p-0.5 rounded-sm bg-gray-100 focus:outline-none w-5/6'
                                type="number"
                                name=""
                                id="attendees"
                                min={0}
                                value={attendees}
                                onChange={(e) => setAttendees(parseInt(e.target.value))}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="datetime" className='block w-full text-xl font-semibold text-white'>Time</label>
                            <input className='p-0.5 rounded-sm bg-gray-100 focus:outline-none w-5/6'
                                type="datetime-local"
                                name=""
                                id="datetime"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                            />
                        </div>
                        <div className="input-mb-2">
                            <label htmlFor="venue" className='block w-full text-xl text-white font-semibold'>Venue:</label>
                            <input className='p-0.5 rounded-sm bg-gray-100 focus:outline-none w-5/6'
                                type="text"
                                name=""
                                id="venue"
                                value={selectedVenue}
                                readOnly
                            />
                        </div>
                        <button id="Add Event" type="submit" className="border-0 outline-none cursor-pointer rounded-md text-white font-semibold hover:bg-blue-500  bg-gray-700 py-1 px-4 w-3/4 ml-4 my-8 transition ease-in-out duration-300 "
                            onClick={addNewEvent}>
                            Add Event
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEvent