import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginhandler = () => {
    setIsLogin(!isLogin)
  }

  const getInputData =(e)=>{
    e.preventDefault();
    console.log(fullname,email,password);
    setFullname("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <Header />
      <div className='absolute'>
        <img className='w-[100vw] h-[100vh] bg-cover' src='https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png' alt='landing banner' />
      </div>
      <form onSubmit={getInputData} className='flex flex-col w-3/12 my-36 p-12 left-0 right-0 mx-auto items-center justify-center absolute rounded-md bg-black opacity-90' >
        <h1 className='text-3xl text-white mb-5 font-bold'>{isLogin ? "Login" : "Signup"}</h1>
        <div className='flex flex-col'>
          {
            !isLogin && <input value={fullname} onChange={(e)=>setFullname(e.target.value)} type='text' placeholder='Full Name' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          }
          <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='Password' className='outline-none p-3 my-2 rounded-sm bg-gray-800 text-white' />
          <button className='bg-red-600 mt-6 mb-2 p-3 text-white rounded-sm  font-medium'>{isLogin ? "Login":"Signup"}</button>
          <p className='text-white'>{isLogin ? "New to Netflix?" : "Already have an account?"}<span onClick={loginhandler} className='ml-1 text-blue-900 font-medium cursor-pointer'>{isLogin ? "Signup" : "Login"}</span></p>
        </div>
      </form>
    </div>
  )
}
export default Login