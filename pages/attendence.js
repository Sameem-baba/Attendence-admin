import Sidebar from "../components/Sidebar";
import Container from "../components/Container";

function Attendence() {
  return (
    <div
      className=""
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://ak.picdn.net/shutterstock/videos/20344780/thumb/1.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="flex">
        <Sidebar />
        <div className="w-screen text-center flex flex-col justify-center items-center">
          <Container />
        </div>
      </div>
    </div>
  );
}

export default Attendence;
