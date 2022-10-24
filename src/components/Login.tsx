import React, {useState} from "react";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";


export default function Login(props : {setLoggedIn: Function}) {
    const [email, setEmail] = useState("")

    function handleChangeEmail(event: React.ChangeEvent<HTMLInputElement>){
        setEmail(event.target.value)
    }

    function login(){
        if(!email)return 
        props.setLoggedIn(true)
    }

  return (
    <div className='container text-center flex flex-col items-center'>
      <h1 className='text-xl py-4 font-bold border-gray-800 '>
        The NewYork Times
      </h1>
      <hr></hr>
      <div className='max-w-md'>
        <h3 className='text-3xl py-4 font-times'>
          Log in or create an account
        </h3>
        <div className='flex flex-col gap-4 mb-6'>
          <div className='flex flex-col'>
            <label
              htmlFor='email'
              className='text-sm font-bold text-start mb-1'
            >
              Email Address
            </label>
            <input
              type='text'
              className='border border-gray-700 py-1 rounded-sm px-2'
              onChange={handleChangeEmail}
              value={email}
            />
          </div>
          <button className='bg-black text-white font-bold py-2 rounded-sm' onClick={login}>
            Continue
          </button>
          <h1 className='border-b border-gray-300 text-sm leading-tighter'>
            <span className='font-semibold bg-white px-2'>or</span>
          </h1>
        </div>
        <div className='text-sm font-semibold mb-4'>
          <p>
            By continuing, you agree to the{" "}
            <a href='#' className='underline'>
              Terms of Service
            </a>{" "}
            and acknowledge our{" "}
            <a href='#' className='underline'>
              Privacy Policy.
            </a>
          </p>
        </div>
        <div className='font-bold'>
          <div className='flex justify-center border border-black py-3 px-4 mb-1 rounded hover:cursor-pointer'>
            <FaGoogle />
            <p className='ml-3'>Continue with Google</p>
          </div>
          <div className='flex justify-center border border-black py-3 px-4 mb-1 rounded hover:cursor-pointer '>
            <FaFacebook />
            <p className='ml-3'>Continue with Facebook</p>
          </div>
          <div className='flex justify-center border border-black py-3 px-4 mb-1 rounded hover:cursor-pointer '>
            <FaApple />
            <p className='ml-3'>Continue with Apple</p>
          </div>
        </div>
      </div>
    </div>
  );
}
