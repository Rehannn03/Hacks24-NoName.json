import React, { useState } from "react";

const PatientList = ({  onAcceptAppointment, onRejectAppointment }) => {
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const appointments = [
    {
      id: 1, // Unique identifier for the appointment
      patient: {
        name: "John Doe",
        age: 35,
      },
      date: '5/02/24', // February 5th, 2024
      time: "10:00 AM",
      reason: "Follow-up appointment",
    },
    {
      id: 2,
      patient: {
        name: "Jane Smith",
        age: 28,
      },
      date: '8/02/2024', // February 8th, 2024
      time: "2:00 PM",
      reason: "New patient consultation",
    },
    {
      id: 3,
      patient: {
        name: "Michael Lee",
        age: 42,
      },
      date: '12/02/2024', // February 12th, 2024
      time: "3:30 PM",
      reason: "Physical examination",
    },
    {
      id: 4,
      patient: {
        name: "Michael Scoot",
        age: 35,
      },
      date: '12/05/2024', // February 12th, 2024
      time: "5:30 PM",
      reason: "Blood Report",
    },
    {
      id: 5,
      patient: {
        name: "Dwight Schrute",
        age: 25,
      },
      date: '15/02/2024', // February 12th, 2024
      time: "1:30 PM",
      reason: "Covid Report",
    },
    {
      id: 6,
      patient: {
        name: "Chung Lee",
        age: 30,
      },
      date: '12/02/2024', // February 12th, 2024
      time: "3:30 PM",
      reason: "Physical examination",
    },
  ];
  const handleSelectAppointment = (appointment) => {
    setSelectedAppointment(appointment);
  };

  const handleAcceptAppointment = () => {
    // Call actual accept appointment function with selectedAppointment
    onAcceptAppointment(selectedAppointment);
    setSelectedAppointment(null);
  };

  const handleRejectAppointment = () => {
    // Call actual reject appointment function with selectedAppointment
    onRejectAppointment(selectedAppointment);
    setSelectedAppointment(null);
  };

  return (
    <div className="flex flex-col space-y-4 mt-[-730px]">
      {appointments.map((appointment) => (
        <div
          key={appointment.id}
          className={`flex items-center justify-between px-4 py-2 rounded shadow-md hover:bg-gray-100 cursor-pointer ${
            selectedAppointment?.id === appointment.id ? "bg-gray-900" : ""
          }`}
          onClick={() => handleSelectAppointment(appointment)}
        >
          <div className="flex flex-col">
            <span className="text-gray-600 font-semibold ml-[250px]">{appointment.patient.name}</span>
            <span className="text-sm text-gray-400 ml-[250px]">{appointment.date} at {appointment.time}</span>
          </div>
          <div className="flex space-x-4">
            <button
              className="px-2 py-1 rounded text-white bg-green-500 hover:bg-green-400 disabled:opacity-50"
              disabled={!selectedAppointment || selectedAppointment.id !== appointment.id}
              onClick={handleAcceptAppointment}
            >
              Accept
            </button>
            <button
              className="px-2 py-1 rounded text-white bg-red-500 hover:bg-red-400 disabled:opacity-50"
              disabled={!selectedAppointment || selectedAppointment.id !== appointment.id}
              onClick={handleRejectAppointment}
            >
              Reject
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PatientList;