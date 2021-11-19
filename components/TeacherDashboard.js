import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { auth, db } from "../firebase";
import {
    useAuthState
} from "react-firebase-hooks/auth"

function TeacherDashboard() {
    const [present, setPresent] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, 'attendence', 'user', 'present'),
                ),
                snapshot => setPresent(snapshot.docs)

            ),
        [db]
    );

    
    return (
        <div>
            <h1 className="font-bold text-lg p-5">Admin Dashboard</h1>

            <main>
                <section className='flex pl-5 space-x-5 rounded-lg shadow-2xl'>
                    <h3 className='font-semibold text-md '>Total Strength</h3>
                    <p>38</p>
                </section>

                <section className='flex pl-5 space-x-5 rounded-lg shadow-2xl'>
                    <h3 className='font-semibold text-md '>Present</h3>
                    <p>{present.length}</p>
                </section>

                <section className='flex pl-5 space-x-5 rounded-lg'>
                    <h3 className='font-semibold text-md '>Absent</h3>
                    <p>{38 - present.length}</p>
                </section>
            </main>
        </div>
    )
}

export default TeacherDashboard
