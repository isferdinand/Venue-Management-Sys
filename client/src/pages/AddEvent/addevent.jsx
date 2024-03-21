import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import PropTypes from 'prop-types'
import './addevent'

const AddEvent = () => {
    AddEvent.propTypes = {
        setSidebarToggle: PropTypes.func.isRequired,
        sidebarToggle: PropTypes.bool.isRequired
    }
    return (
        <div className=''>
            <div className="flex">
                <Sidebar />
                <Navbar />
            </div>
            <div className=" m-0 mx-auto mt-8 max-w-md md:mx-w-sm md:mx-auto">
                <div className="p-4   bg-indigo-950 border-2 border-red-600 rounded-md">
                    <form action="" className=''>
                        <h2 className="text-xl text-white text-center font-bold p-1 mb-2">New Event</h2>
                        <div className="mb-2">
                            <label htmlFor="event" className='block w-full text-xl text-white font-semibold'>Event: </label>
                            <input className='p-0.5 rounded-sm bg-gray-100 focus:outline-none w-5/6'
                                type="text"
                                name=""
                                id="event"
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="attendees" className='block w-full text-xl text-white font-semibold'>No of attendees:</label>
                            <input className='p-0.5 rounded-sm bg-gray-100 focus:outline-none w-5/6'
                                type="number"
                                name=""
                                id="attendees"
                                min={0}
                            />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="time" className='block w-full text-xl font-semibold text-white'>Time</label>
                            <input className='p-0.5 rounded-sm bg-gray-100 focus:outline-none w-5/6'
                                type="date"
                                name=""
                                id="time"
                                min={0}
                            />
                        </div>
                        <div className="input-mb-2">
                            <label htmlFor="venue" className='block w-full text-xl text-white font-semibold'>Venue:</label>
                            <input className='p-0.5 rounded-sm bg-gray-100 focus:outline-none w-5/6'
                                type="text"
                                name=""
                                id="venue"
                            />
                        </div>
                        <button id="Add Event" type="submit" className="border-0 outline-none cursor-pointer rounded-md text-white font-semibold hover:bg-blue-500  bg-gray-700 py-1 px-4 w-3/4 my-8 transition ease-in-out duration-300 ">
                            Add Event
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddEvent