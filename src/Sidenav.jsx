import React from 'react'
import './side.css'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div style={{height:"auto",backgroundColor:"blue", width:"300px"}}>
<div>
    <div className="logo">
        <img src="http://scict.edossier.app/edozzier/upload/company/SCICT-staff-18-sqi-new-logo.jpeg" alt="" />
        <div className="port">
            <h5>SCICT</h5>
            <p>Student portal</p>
        </div>
    </div>
     <ul>
        General
        <li>
        <Link to={"/parent/profile"}>Dashboard</Link>
        </li>
       

    </ul>
    <ul>
        Profile
        <li>
        <Link to={"/parent/profile"}>My profile</Link>
        </li>
        <li>Change password</li>
        <li>Document</li>

    </ul>
      <ul>
        Academics
        <li>
        <Link to={"/parent/profile"}>Course Registration</Link>
        </li>
        <li>Resources</li>
        <li>Registration History</li>
        <li>Semester Result</li>
        <li>View timetable</li>
        <li>Library</li>

    </ul>
       <ul>
        Payments
        <li>
        <Link to={"/parent/profile"}>Pay Tuition</Link>
        </li>
        <li>Payment History</li>
        <li>Registration History</li>
        <li>Transaction History</li>
        <li>View timetable</li>
        <li>Library</li>

    </ul>
       <ul>
        Others
        <li>
        <Link to={"/parent/profile"}>Notice Board</Link>
        </li>
        <li>Accommodation</li>
        <li>Election </li>
        <li>Certificate</li>
        <li>Help</li>
        <li>Logout</li>

    </ul>
</div>
    </div>
  )
}

export default Sidenav