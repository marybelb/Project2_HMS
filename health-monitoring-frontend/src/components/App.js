import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../App.css'; // Ensure the path is correct
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';
import Messaging from './Messaging'; 
import Measurements from './Measurements';
import Appointment from './Appointment';
import Admin from './Admin';
import Doctor from './Doctor';
import BrowsePatients from './BrowsePatients';
import AssignDevice from './AssignDevice';
import AlertsScheduling from './AlertsScheduling';
import InputData from './InputData';
import ChatWithPatients from './ChatWithPatients';
import ReadTranscripts from './ReadTranscripts';
import SearchMessages from './SearchMessages';
import ViewCalendar from './ViewCalendar';
import ViewAppointments from './ViewAppointments';
import AddUser from './AddUser';
import AssignRoles from './AssignRoles';
import ManageDevices from './ManageDevices';
import EnableDisableDevices from './EnableDisableDevices';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} /> 
            <Route path="/messaging" element={<Messaging />} />
            <Route path="/measurements" element={<Measurements />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/doctor" element={<Doctor />} />
            <Route path="/browse-patients" element={<BrowsePatients />} />
            <Route path="/assign-device" element={<AssignDevice />} />
            <Route path="/alerts-scheduling" element={<AlertsScheduling />} />
            <Route path="/input-data" element={<InputData />} />
            <Route path="/chat-with-patients" element={<ChatWithPatients />} />
            <Route path="/transcripts" element={<ReadTranscripts />} />
            <Route path="/search-messages" element={<SearchMessages />} />
            <Route path="/view-calendar" element={<ViewCalendar />} />
            <Route path="/view-appointments" element={<ViewAppointments />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/assign-roles" element={<AssignRoles />} />
            <Route path="/manage-devices" element={<ManageDevices />} />
            <Route path="/enable-disable-devices" element={<EnableDisableDevices />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;