import Sidebar from "../components/Sidebar";
import { auth } from "../firebase";
import Image from "next/image";
import { useAuthState } from "react-firebase-hooks/auth";
import UsernameModel from "../components/UsernameModel";
import { useRecoilState } from "recoil";
import { modaluserState } from "../atoms/ModaluserAtom";

function Profile() {
  const [user] = useAuthState(auth);
  const [open, setOpen] = useRecoilState(modaluserState);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-2"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://ak.picdn.net/shutterstock/videos/20344780/thumb/1.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <Sidebar />
      <div className="p-10 text-center bg-purple-600 text-white rounded-2xl shadow-2xl flex flex-col justify-center space-y-5 items-center">
        <Image
          className="bg-black rounded-full cursor-pointer"
          src={`https://avatars.dicebear.com/api/pixel-art/${user?.email}.svg`}
          width={100}
          height={100}
        />

        <h1>Email - {user?.email}</h1>

        <h1>
          Username - {!user?.displayName ? user?.email : user?.displayName}
        </h1>
      </div>
      <button
        onClick={() => setOpen(true)}
        className="bg-gradient-to-tr from-purple-600 to-green-600 px-5 py-2 mt-10 rounded-3xl top-10 right-10"
      >
        Change Username
      </button>

      <UsernameModel />
    </div>
  );
}

export default Profile;
