import { useEffect, useState } from 'react';
import './login.css'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios';

const Login = () => {
    // use state hook to store inputs
    const [loginUserName, setLoginUserName] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const navigateTo = useNavigate()

    const [loginStatus, setLoginStatus] = useState('')
    const [statusHolder, setStatusHolder] = useState('hideMessage')

    const loginUser = (e) => {
        // Prevent form submission
        e.preventDefault()

        // Using Axios to create an API that connects to the server
        Axios.post('http://localhost:3002/login', {
            // Variable to send to server through the route  
            LoginUserName: loginUserName,
            LoginPassword: loginPassword
        }).then((response) => {
            if (response.data.message || loginUserName == '' || loginPassword == '') {
                navigateTo('/login') //This navigates to the same page if credentials don't match
                setLoginStatus('Invalid username or password')
            } else {
                navigateTo('/home')
            }
        })
    }

    // Clear form after submission
    const clearOnSubmit = () => {
        setLoginUserName('')
        setLoginPassword('')
    }

    useEffect(() => {
        if (loginStatus !== '' || loginStatus === 'Invalid username or password') {
            setStatusHolder('showMessage')
            setTimeout(() => {
                setStatusHolder('hideMessage')
            }, 2000);
        }
    }, [loginStatus])

    return (
        <div className="bg-gray-800 h-screen flex items-center justify-center">
            <div className=" p-6 bg-indigo-950 border-2 border-lime-50 rounded-md w-72">
                <h1 className="text-3xl text-extrabold text-center text-white mb-2">Login</h1>
                <form action='' onSubmit={clearOnSubmit} >
                    <span className={statusHolder}>{loginStatus}</span>
                    <div className="mb-2 p-1">
                        <label htmlFor="username" className='block w-full text-xl text-white font-semibold mb-2'>Username:</label>
                        <input type="text" name="" id="username" className='p-1 outline-none rounded-md' value={loginUserName} onChange={(e) => setLoginUserName(e.target.value)} />
                    </div>
                    <div className="mb-2 p-1">
                        <label htmlFor="password" className='block w-full text-xl text-white font-semibold mb-2'>Password: </label>
                        <input type="password" name="" id="password" className='p-1 outline-none rounded-md' value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
                    </div>
                    <button id="signin" type="submit" className=" block mt-2 mx-auto outline-none bg-gray-600 text-white rounded-md py-1 px-3 hover:bg-blue-500 transition ease-in-out duration-300" onClick={loginUser} >Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login