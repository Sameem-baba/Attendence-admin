import { deleteDoc, doc, setDoc } from "@firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "../firebase";

function AddAttendence() {
  const router = useRouter();
  const [studentEmail, setStudentEmail] = useState("");
  const [preorab, setPreorab] = useState("");

  let now = new Date();
  //console.log(now);
  let day = now.getDate();
  let month = now.getMonth() + 1;
  let year = now.getFullYear();

  let today = day + "/" + month + "/" + year;

  const attendencemanage = async () => {
    if (preorab === "Present") {
      await setDoc(doc(db, "attendence", "user", "present", studentEmail), {
        email: studentEmail,
        date: today,
        isPresent: true,
      })
        .then((user) => {
          alert("You Have been marked as present");
        })
        .catch((err) => alert(err.message));
    } else {
      await deleteDoc(doc(db, "attendence", "user", "present", studentEmail))
        .then((user) => {
          alert("Student has been marked as absent");
        })
        .catch((err) => alert(err.message));
    }
  };

  return (
    <div>
      <div className="bg-white rounded-3xl shadow-2xl flex w-full max-w-4xl">
        <div className="w-full text-center flex flex-col p-5">
          <div
            className="text-center font-bold cursor-pointer"
            onClick={() => router.push("/home")}
          >
            <span className="text-green-500">Company</span>Name
          </div>
          <div className="py-10">
            <h2 className="text-3xl font-bold text-green-500 mb-2 ">
              Attendence
            </h2>
            <div className="border-2 w-10 border-green-400 inline-block mb-2" />
          </div>
          <div className="flex flex-col items-center ">
            <div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
              <input
                value={studentEmail}
                type="email"
                placeholder="Student's Email"
                className="bg-gray-100 focus:outline-none flex-1"
                onChange={(e) => setStudentEmail(e.target.value)}
              />
            </div>

            <div className="bg-gray-100 w-64 p-2 flex items-center">
              <input
                value={preorab}
                type="text"
                name=""
                placeholder="'Present' or 'Absent'"
                className="bg-gray-100 focus:outline-none flex-1"
                onChange={(e) => setPreorab(e.target.value)}
              />
            </div>

            <div className="mt-10">
              <button
                className="border-2 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white"
                type="submit"
                onClick={attendencemanage}
              >
                Add Attendence
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddAttendence;
