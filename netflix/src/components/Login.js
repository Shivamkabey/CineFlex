import React from 'react'
import Header from './Header'

const Login = () => {
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img className='w-[100vw] h-[100vh] bg-cover' src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png' alt='bg'/>
        </div>
        <form className='flex flex-col w-3/12 my-36 left-0 right-0 mx-auto items-center justify-center absolute bg-red-800' >
          <div className='flex flex-col'>
            <input type='text' placeholder='Full Name'/>
            <input type='email' placeholder='Email'/>
            <input type='text' placeholder='Password'/>
          </div>
        </form>
    </div>
  )
}
export default Login