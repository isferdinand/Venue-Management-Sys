import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Axios from 'axios';

const AddEvent = () => {
    AddEvent.propTypes = {
        setSidebarToggle: PropTypes.func.isRequired,
        sidebarToggle: PropTypes.bool.isRequired
    }
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const [attendees, setAttendees] = useState('')
    const [eventName, setEventName] = useState('')
    const [time, setTime] = useState('')

    const assignVenue = (attendees) => {
        let venue = '';

        if (attendees >= 0 && attendees <= 50) {
            venue = 'Room 1';
        } else if (attendees >= 51 && attendees <= 200) {
            venue = 'Room 2';
        } else if (attendees >= 201 && attendees <= 500) {
            venue = 'Room 3';
        } else if (attendees >= 501 && attendees <= 1500) {
            venue = 'Hall 1';
        } else if (attendees >= 1501 && attendees <= 3000) {
            venue = 'Hall 2';
        } else {
            venue = 'Hall 3';
        }
        return venue;
    }

    const addNewEvent = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:3002/addevent', {
            eventName: eventName,
            attendees: attendees,
            time: time,
            venue: assignVenue(attendees)
        }).then((response) => {
            console.log(response)
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
                            <input className='p-0.5 rounded-sm bg-gray-100 focus:outline-none w-5/6'
                                type="text"
                                name=""
                                id="event"
                                value={eventName}
                                onChange={(e) => setEventName(e.target.value)}
                            />
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
                                value={assignVenue(attendees)}
                                readOnly
                            />
                        </div>
                        <button id="Add Event" type="submit" className="border-0 outline-none cursor-pointer rounded-md text-white font-semibold hover:bg-blue-500  bg-gray-700 py-1 px-4 w-3/4 ml-4 my-8 transition ease-in-out duration-300 "
                            onClick={addNewEvent}
                        >
                            Add Event
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEvent