import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import AdminDashboard from "../components/AdminDashboard";
import Header from "../components/Header";
import TeacherDashboard from "../components/TeacherDashboard";
import { auth } from "../firebase";
import Sidebar from "../components/Sidebar";
import ContainerHome from "../components/ContainerHome";
import Modal from "../components/Modal";

function Home() {
  const [isAdmins, setIsAdmins] = useState(false);

  onAuthStateChanged(auth, (authUser) => {
    if (authUser?.uid === "pi432vbBF1YKLPC7KYl4twAelOu1") {
      setIsAdmins(true);
    }
  });
  return (
    <div className="h-screen overflow-hidden">
      <Sidebar />

      <div className="w-screen text-center flex flex-col justify-center items-center">
        {isAdmins == true ? <AdminDashboard /> : <TeacherDashboard />}
        <Modal />
      </div>
    </div>
  );
}

export default Home;
