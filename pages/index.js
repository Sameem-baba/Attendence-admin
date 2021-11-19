import { onAuthStateChanged } from 'firebase/auth';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { useState } from 'react/cjs/react.production.min';
import Login from '../components/Login'
import { auth } from '../firebase';

export default function Home() {
  const router = useRouter();

    onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        router.push('/home');
      } 
    })


  return (
    <div className="">
      <Head>
        <title>Attendence Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <Login />
      
    </div>
  )
}
