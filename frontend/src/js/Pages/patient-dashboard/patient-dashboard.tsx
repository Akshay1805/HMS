import React from "react";
import Cookies from "js-cookie";
import { useEffect } from "react";
import "./_patient-dashboard.css";
import GetAppointment from "../getappointment/getappointment";


const Patient_dash:React.FC = () => {

    var usr =Cookies.get("patname");
    const LogOut = ()=>{
        Cookies.set("patname","err");
        window.location.href = '/patient_login';
    }
    const ViewAppointments = ()=>{
        window.location.href = '/view_appointments';
    }
    const getappoin = ()=>{
       
        window.location.href = '/get_appointment';
    }
    useEffect(() => {
        //Runs on every render
        usr=Cookies.get("patname");
        if(usr==="err"){
            window.location.href = '/patient_login';
        }
      });
    
    return(
        <div className="header_container">
                Welcome  {usr}
            <div className="Buttons">
                <button className="LogoutButton" onClick={LogOut}>
                    Log Out
                </button>
                <button className="SettimingButton" onClick={getappoin}>
                Get Appointment
                </button>
                <button className="ViewAppointmentButton" onClick={ViewAppointments}>
                View Appointments
                </button>
            </div>
        </div>
    )
}

export default Patient_dash;