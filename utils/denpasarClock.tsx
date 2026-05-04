
import React, {useState, useEffect} from "react"
import { DateTime } from 'luxon';


 const DenpasarClock = () => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const updateClock = () => {
            const now = DateTime.now().setZone('Asia/Makassar');
            setTime(now.toFormat('h:mm a'));
        };

        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return <p className="text-gray-500">{time}</p>;
};
export default DenpasarClock