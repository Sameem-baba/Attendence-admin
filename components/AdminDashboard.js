import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect, useState } from "react"
import { auth, db } from "../firebase";
import {
    useAuthState
} from "react-firebase-hooks/auth"
import Sidebar from "./Sidebar";
import ContainerHome from "./ContainerHome";

function AdminDashboard() {
    const [user] = useAuthState(auth);


    return (
        <div>

            <h1 className="font-bold text-lg p-5">Admin Dashboard</h1>
            <ContainerHome />
        </div>
    )
}

export default AdminDashboard
