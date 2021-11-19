import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../firebase"

function Header() {
    const [isAdmin, setIsAdmin] = useState(false);
    const [burgerOpen, setBurgerOpen] = useState(true);
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    onAuthStateChanged(auth, (authUser) => {
        if (authUser?.uid === 'mUXn3ZIIvxR79MGnJ5YXUVPhYUq2') {
            setIsAdmin(true);
        }
    })

    const addUser = () => {
        createUserWithEmailAndPassword(auth, email, password).then((credentials) => {
            alert('User Created sucessfully');
            setBurgerOpen(true)
        }).catch((error) => alert(error.message))
    }

    const signOff = () => {
        signOut(auth).then(() => {
            router.push('/')
        }).catch((error) => {
            alert(error.message);
        });
    }

    return (
        <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
            <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
                {isAdmin === true ? (
                    <button onClick={() => setBurgerOpen(false)}className="text-sm p-5">
                        Add teacher
                    </button>
                ): (
                    <button onClick={() => setBurgerOpen(false)} className='text-sm p-5'>
                        Add Student
                    </button>
                )}
                
                <div hidden={burgerOpen}>
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
                                        value={email}
                                        type="email"
                                        placeholder='Email'
                                        className='bg-gray-100 focus:outline-none flex-1'
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className='bg-gray-100 w-64 p-2 flex items-center'>
                                    <input
                                        value={password}
                                        type="password"
                                        name='password'
                                        placeholder='Password' className='bg-gray-100 focus:outline-none flex-1'
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                    <div className='mt-10'>
                                    <button className='border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white' type='submit' onClick={addUser}>
                                        {isAdmin === true ? 'Add Teacher': 'Add Student'}
                                    </button>
                                </div>  
                            </div>
                    </div>     
                </div>
                

            <button className='text-sm p-5' onClick={signOff}>
                Logout
            </button>
            </div>
            
            
        </div>
    )
}

export default Header
