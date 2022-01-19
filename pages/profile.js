import Sidebar from "../components/Sidebar";
import { auth } from "../firebase";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";

function Profile() {
  const [user] = useAuthState(auth);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Sidebar />
      <div className="p-10 text-center bg-purple-600 text-white rounded-2xl shadow-2xl flex flex-col justify-center space-y-5 items-center">
        <Image
          className="bg-black rounded-full cursor-pointer"
          src={`https://avatars.dicebear.com/api/pixel-art/${user?.email}.svg`}
          width={100}
          height={100}
        />

        <h1>Email - {user?.email}</h1>

        <h1>Username - {user?.email}</h1>
      </div>
    </div>
  );
}

export default Profile;
