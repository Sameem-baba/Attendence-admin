import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import { useRouter } from "next/router";

function Login() {
    const router = useRouter();
    const emailRef = useRef();
    const passwordRef = useRef();
    const login = () => {
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value).then((data) => {
            const user = data.user;
        }).catch((error) => alert(error.message))
    }

    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <main className="flex flex-col items-center justify-center w-2/3 flex-1 text-center">
                <div className='bg-white rounded-3xl shadow-2xl flex w-2/3 max-w-4xl'>
                    <div className='w-3/5 text-center flex flex-col p-5'>
                        <div className='text-center font-bold'>
                            <span className='text-green-500'>Company</span>Name
                        </div>
                        <div className='py-10'>
                            <h2 className='text-3xl font-bold text-green-500 mb-2 '>Sign In</h2>
                            <div className='border-2 w-10 border-green-400 inline-block mb-2' />
                        </div>
                        <div className='flex flex-col items-center '>
                            <div className='bg-gray-100 w-64 p-2 flex items-center mb-3'>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    placeholder='Email' className='bg-gray-100 focus:outline-none flex-1'
                                />
                            </div>

                            <div className='bg-gray-100 w-64 p-2 flex items-center'>
                                <input
                                    ref={passwordRef}
                                    type="password"
                                    name='password'
                                    placeholder='Password' className='bg-gray-100 focus:outline-none flex-1'
                                />
                            </div>
                            
                            <div className='mt-10'>
                                <button className='border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white' type='submit' onClick={login} >
                                    Sign In
                                </button>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Login;