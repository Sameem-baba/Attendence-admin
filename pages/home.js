import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import Header from "../components/Header"
import TeacherDashboard from "../components/TeacherDashboard";
import { auth } from "../firebase";

function Home() {
    const [isAdmins, setIsAdmins] = useState(false);


    onAuthStateChanged(auth, (authUser) => {
        if (authUser?.uid === 'pi432vbBF1YKLPC7KYl4twAelOu1') {
            setIsAdmins(true);
        }
    })
    return (
        <div>
            
            <Header />

            {isAdmins === true ? (
                <AdminDashboard />
            ) : (
                <TeacherDashboard />
            )}
        </div>
    )
}

export default Home
