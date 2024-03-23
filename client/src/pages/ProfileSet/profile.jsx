import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import PropTypes from 'prop-types'
import { useState } from 'react'

const Profile = () => {
    Profile.propTypes = {
        sidebarToggle: PropTypes.bool.isRequired
    }
    const [sidebarToggle, setSidebarToggle] = useState(false)

    return (
        <div>
            <div className="flex">
                <Sidebar sidebarToggle={sidebarToggle} />
                <Navbar sidebarToggle={sidebarToggle}
                    setSidebarToggle={setSidebarToggle} />
            </div>
            <div className='ml-64  flex flex-col'>
                <h1 className='text-2xl font-bold p-1'>Change password</h1>
                <div className='ml-6'>
                    <form action="">
                        <label htmlFor="Current password" className='block w-full font-semibold '>Current password</label>
                        <input type="text" className='border-2 border-gray-300 rounded-lg p-1 m-1 outline-none' />
                        <label htmlFor="New password" className='block w-full font-semibold'>New password</label>
                        <input type="text" className='border-2 border-gray-300 rounded-lg p-1  outline-none m-1' />
                        <label htmlFor="Confirm new password" className='block w-full font-semibold'>Confirm new password</label>
                        <input type="text" className='border-2 border-gray-300 rounded-lg p-1 m-1 block  outline-none' />
                        <button className='mt-2 bg-blue-500 text-white px-3 py-2 px m-1 rounded-lg hover:bg-blue-200'>Change Password </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile