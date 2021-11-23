import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { auth, db } from "../firebase";
import {
    useAuthState
} from "react-firebase-hooks/auth"
import ContainerHome from "./ContainerHome";

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
            <h1 className="font-bold text-lg p-5">Teacher Dashboard</h1>

            <ContainerHome />
        </div>
    )
}

export default TeacherDashboard
