import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    // Initial time in seconds (1 hour)
    const initialTime = 1020 * 1020;
    const [timeRemaining, setTimeRemaining] = useState(initialTime);

    useEffect(() => {
        const timerInterval = setInterval(() => {
            setTimeRemaining((prevTime) => {
                if (prevTime === 0) {
                    clearInterval(timerInterval);
                    // Perform actions when the timer reaches zero
                    console.log('Countdown complete!');
                    return 0;
                } else {
                    return prevTime - 1;
                }
            });
        }, 1000);

        // Cleanup the interval when the component unmounts
        return () => clearInterval(timerInterval);
    }, []); // The empty dependency array ensures the effect runs only once on mount

    // Convert seconds to hours, minutes, and seconds
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    const seconds = timeRemaining % 60;

    return (
        <div className='inConstruction-timer-container'>
            <h4 className='inConstruction-title'>Pagina en Construcción</h4>
            <div className='inConstruction-timer'>
                <span>{`${hours}h`}</span>
                <span>{`${minutes}m`}</span>
                <span>{`${seconds}s`}</span>
            </div>
        </div>
    );
};

export default CountdownTimer;




