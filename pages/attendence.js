import Sidebar from "../components/Sidebar";
import Container from '../components/Container';

function Attendence() {
    return (
        <div className=''>
            <div className='flex'>
                <Sidebar />
                <div className='w-screen text-center flex flex-col justify-center items-center'>
                    <Container />
                </div>
            </div>
        </div>
    )
}

export default Attendence
