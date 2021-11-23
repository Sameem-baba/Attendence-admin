import CardDate from "./CardDate"
import Image from 'next/image';
import Card from "./Card";
import { useEffect, useState } from "react";
import { collection, onSnapshot, query } from "@firebase/firestore";
import { db } from "../firebase";

function ContainerHome() {
    const [present, setPresent] = useState([]);

    useEffect(
        () =>
            onSnapshot(
                query(
                    collection(db, 'attendence'),
                ),
                snapshot => setPresent(snapshot.docs)

            ),
        [db]
    );

    let now = new Date();
	//console.log(now);
	let day = now.getDate();
	let month = now.getMonth()+1;
	let year = now.getFullYear();

    let today = day + "/" + month + "/" + year;

    return (
        <div className='relative h-screen'>
            <div className='w-screen'>
                <Image src='https://ak.picdn.net/shutterstock/videos/20344780/thumb/1.jpg'
                    layout='fill'
                />
            </div>
            <div className='absolute px-20 z-20 text-center justify-center w-full py-1 flex items-center space-x-5 mt-5'>
                <p className='text-gray-400 text-lg '>Attendence</p>
                <p className='font-bold text-white text-2xl '>Management</p>
            </div>
            <div className='flex absolute text-center z-20 w-full top-20 justify-center items-center'>
                <CardDate title='Date' description={today}/>
            </div>
            <div className='flex -ml-30 absolute text-center z-20 w-full top-20 justify-center items-center mt-10'>
                <Card title='Total Strength' description='38'/>
            </div>
            <div className='flex absolute  text-center z-20 w-full top-48 left-10 justify-center items-center mt-20'>
                <Card title='Present' description={present.length}/>
            </div>
            <div className='flex absolute  text-center z-20 w-full top-96 left-10 justify-center items-center mt-20'>
                <Card title='Absent' description={38 - present.length}/>
            </div>
        </div>
    )
}

export default ContainerHome
