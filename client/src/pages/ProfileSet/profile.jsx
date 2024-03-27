import Sidebar from '../../components/Sidebar'
import Navbar from '../../components/Navbar'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Axios from 'axios'

const Profile = () => {
    Profile.propTypes = {
        sidebarToggle: PropTypes.bool.isRequired
    }
    const [sidebarToggle, setSidebarToggle] = useState(false)
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')

    const changePassword = (e) => {
        e.preventDefault()

        Axios.post('http://localhost:3002/profile', {
            currentPassword: currentPassword,
            newPassword: newPassword,
            confirmNewPassword: confirmNewPassword
        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
            }
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });

        if (newPassword !== confirmNewPassword) {
            alert("The new passwords don't match");
            return;
        }
    }

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
                        <input type="password" className='border-2 border-gray-300 rounded-lg p-1 m-1 outline-none'
                            value={currentPassword}
                            onChange={(e) => { setCurrentPassword(e.target.value) }}
                            autoComplete='currentPassword'
                        />
                        <label htmlFor="New password" className='block w-full font-semibold'>New password</label>
                        <input type="password" className='border-2 border-gray-300 rounded-lg p-1  outline-none m-1'
                            value={newPassword}
                            onChange={(e) => { setNewPassword(e.target.value) }}
                            autoComplete='newPassword'
                        />
                        <label htmlFor="Confirm new password" className='block w-full font-semibold'>Confirm new password</label>
                        <input type="password" className='border-2 border-gray-300 rounded-lg p-1 m-1 block  outline-none'
                            value={confirmNewPassword}
                            onChange={(e) => { setConfirmNewPassword(e.target.value) }}
                            autoComplete='confirmNewPassword'
                        />
                        <button className='mt-2 bg-blue-500 text-white px-3 py-2 px m-1 rounded-lg hover:bg-blue-200' onClick={changePassword}>Change Password </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Profile