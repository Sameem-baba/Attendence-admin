import { onAuthStateChanged, signOut } from "@firebase/auth";
import {
  AccountCircleSharp,
  AddTwoTone,
  DonutLargeRounded,
  ExitToAppRounded,
  RecentActorsTwoTone,
} from "@material-ui/icons";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../firebase";
import Link from "next/link";

function Sidebar() {
  const router = useRouter();
  const [isAdmin, setIsAdmin] = useState(false);

  onAuthStateChanged(auth, (authUser) => {
    if (authUser?.uid === "pi432vbBF1YKLPC7KYl4twAelOu1") {
      setIsAdmin(true);
    }
  });

  const signOff = () => {
    signOut(auth).then(() => router.push("/"));
  };

  return (
    <div className="md:w-1/6 w-1/3 h-screen fixed bg-white shadow-2xl left-0 top-0 z-30">
      <div className="border flex justify-around p-5">
        <p className="text-xl font-semibold">Attendence</p>
        <p>!</p>
        <p className="text-gray-400 text-lg">Management</p>
      </div>
      <div className="p-4 space-y-8">
        <div className="space-y-6">
          <h1 className="text-gray-400">Menu</h1>
          <div onClick={() => router.push("/home")} className="">
            <div className="flex space-x-4 cursor-pointer">
              <DonutLargeRounded className="text-gray-300" />
              <p className="text-gray-600 text-lg font-light">Dashboard</p>
            </div>
          </div>
          <Link href="/attendence" className="cursor-pointer">
            <div className="flex space-x-4 cursor-pointer">
              <RecentActorsTwoTone className="text-gray-300" />
              <p className="text-gray-600 text-lg font-light">Attendence</p>
            </div>
          </Link>
          <div onClick={() => router.push("/addUser")} className="">
            <div className="flex space-x-4 cursor-pointer">
              <AddTwoTone className="text-gray-300" />
              <p className="text-gray-600 text-lg font-light">
                {isAdmin == true ? "Add Teacher" : "Add Student"}
              </p>
            </div>
          </div>
          <div className="">
            <div
              className="flex space-x-4 cursor-pointer"
              onClick={() => router.push("/profile")}
            >
              <AccountCircleSharp className="text-gray-300" />
              <p className="text-gray-600 text-lg font-light">Profile</p>
            </div>
          </div>
          <div className="">
            <div
              className="flex space-x-4 cursor-pointer bg-red-600 rounded-md p-3"
              onClick={signOff}
            >
              <ExitToAppRounded className="text-gray-300" />
              <p className="text-gray-200 text-lg font-light">Logout</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
