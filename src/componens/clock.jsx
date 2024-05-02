import React, { useState, useEffect } from 'react';

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalID = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalID);
    }, []);

    const seconds = time.getSeconds();
    const minutes = time.getMinutes();
    const hours = time.getHours();

    // Menghitung rotasi setiap jarum
    const secondRotation = seconds * 6; // 360 derajat dibagi 60 detik
    const minuteRotation = (minutes * 6) + (seconds / 10); // 360 derajat dibagi 60 menit ditambah pergeseran detik
    const hourRotation = (hours * 30) + (minutes / 2); // 360 derajat dibagi 12 jam ditambah pergeseran menit

    // Membuat array untuk angka dari 1 hingga 12
    const numbers = Array.from({ length: 12 }, (_, index) => index + 1);

    return (
        <div className='bg-blue-900' style={{
            position: 'relative',
            width: 200,
            height: 200,
            borderRadius: '50%',
            border: '2px solid black',
            textAlign: 'center',
            color: 'black'
        }}>
            {/* Menampilkan angka di sekeliling lingkaran */}
            {numbers.map(number => (
                <div
                    key={number}
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: 5,
                        transformOrigin: 'bottom',
                        transform: `translate(-50%, -50%) rotate(${(number - 1) * 30}deg)`
                    }}
                >
                    {number}
                </div>
            ))}
            {/* Jarum Detik */}
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${secondRotation}deg)`,
                    width: 2,
                    height: 50,
                    backgroundColor: 'red',
                    transformOrigin: 'bottom'
                }}
            />
            {/* Jarum Menit */}
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${minuteRotation}deg)`,
                    width: 4,
                    height: 40,
                    backgroundColor: 'blue',
                    transformOrigin: 'bottom'
                }}
            />
            {/* Jarum Jam */}
            <div
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(-50%, -50%) rotate(${hourRotation}deg)`,
                    width: 6,
                    height: 30,
                    backgroundColor: 'green',
                    transformOrigin: 'bottom'
                }}
            />
        </div>
    );
}

export default Clock;
