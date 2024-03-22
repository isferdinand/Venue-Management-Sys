import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'

import room1 from '../../assets/Room1.jpg'
// import room2 from '../../assets/Room2.jpg'
import room3 from '../../assets/Room3.jpg'
import Hall1 from '../../assets/Hall1.jpg'
import Hall2 from '../../assets/Hall2.jpg'

const Venues = () => {
    return (
        <div>
            <div className="flex">
                <Sidebar />
                <Navbar />
            </div>
            <div className="ml-64 flex flex-col items-center mt-10">
                <h1 className="text-3xl font-bold">Venues</h1>
                <div className='flex flex-wrap gap-3 ml-6'>
                    <div className='p-2 border-2 border-gray-600'>
                        <img src={room1} alt="room1" className=' w-96' />
                        <div>
                            <h2>Location: Building A</h2>
                            <p>Capacity: 200</p>
                            <p>Status: Booked</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-600'>
                        <img src={room3} alt="room1" className='w-96' />
                        <div>
                            <h2>Location: Building A</h2>
                            <p>Capacity: 400</p>
                            <p>Status: Vacant</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-600'>
                        <img src={Hall1} alt="room1" className='w-96' />
                        <div>
                            <h2>Location: Building B</h2>
                            <p>Capacity: 800</p>
                            <p>Status: Booked</p>
                        </div>
                    </div>
                    <div className='border-2 border-gray-600'>
                        <img src={Hall2} alt="room1" className='w-96' />
                        <div>
                            <h2>Location: Building A</h2>
                            <p>Capacity: 1000</p>
                            <p>Status: Vacant</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venues