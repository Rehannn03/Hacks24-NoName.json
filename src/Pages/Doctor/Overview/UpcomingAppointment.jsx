import React from 'react';

const UpcomingAppointment = () => {
    const appointments = [
        { id: 1, date: '2022-10-01', time: '10:00 AM', patient: 'John Doe' },
        { id: 2, date: '2022-10-02', time: '11:30 AM', patient: 'Jane Smith' },
        { id: 3, date: '2022-10-03', time: '02:15 PM', patient: 'Alice Johnson' },
    ];

    return (
        <div className='container mx-auto p-4 ml-[-350px]'>
        <h1 className='text-2xl font-bold mb-4'>Upcoming Appointments</h1>
        <table className='min-w-full border border-gray-300'>
            <thead>
                <tr className='bg-gray-100'>
                    <th className='border p-2'>Date</th>
                    <th className='border p-2'>Time</th>
                    <th className='border p-2'>Patient</th>
                </tr>
            </thead>
            <tbody>
                {appointments.map(appointment => (
                    <tr key={appointment.id}>
                        <td className='border p-2'>{appointment.date}</td>
                        <td className='border p-2'>{appointment.time}</td>
                        <td className='border p-2'>{appointment.patient}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);
};

export default UpcomingAppointment;
