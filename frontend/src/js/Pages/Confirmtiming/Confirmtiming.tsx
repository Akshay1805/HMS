import React, { useEffect } from "react";
import { HealmeLogo } from "../../../constants/constants";
import { DocPic } from "../../../constants/constants";
import './_Confirmtiming.css';
import Cookies from "js-cookie";
import axios from "axios";

const Confirmtiming:React.FC = () => {
    const Logout = ()=>{
        Cookies.set("patname", "err");
        window.location.href = '/patient_login';
    }
    const Godash = ()=>{
        window.location.href = '/patient_dashboard';
    }
    
      const confirmButtonClick = () => {
        const detail = {
            "usr": Cookies.get('docselect'),
            "time": Cookies.get('selectedtiming'),
            "date":Cookies.get('selecteddate'), // Get the date part as a string
            "patname":Cookies.get("patname")
          };
        axios.post('/confirmappointment', detail)
    .then((response) => {
        Cookies.set("docname",response.data['message']);
            
    
                window.location.href = '/patient_dashboard';
                alert("Booked");
    })
    .catch((error) => {
       
    });
        
}
  
  
    return (
        <div className="home-page-container">
            <div className="header-container">
                <div className="logo-container">
                    <img className="logo-img" src={ HealmeLogo } alt="Logo" />
                </div>
                    <button type="button" className="doctor-btn" onClick={Logout}>
                         Log out
                    </button>
                    <button type="button" className="doctor-btn" onClick={Godash}>
                         home
                    </button>
            </div>
           
            <div className="body-container" id='list'>
                <div className="doctor-confirm-panel" >
                    <div className="doc-photo">
                         <img className="doc" src= { DocPic } alt="Pic of the doctor" />
                    </div>
                    <div className="appointment-description">
                        <div>
                        {Cookies.get('docselect')}
                        </div>
                        <div>  
                        {Cookies.get('doctype')}
                        </div>
                        <div>  
                            {Cookies.get('selectedtiming')} 
                        </div>
                        <div>  
                            {Cookies.get('selecteddate')} 
                        </div>
                    </div>
                    <button type="button" className="doctor-btn" onClick={confirmButtonClick}>
                         Confirm Appointment
                    </button>
                </div>
                
            </div>
            {/* <div className="bottom-border">
            </div>
            <div className="copyrights-text">©HEALME TECHNOLOGIES</div> */}
        </div>
    )
}

export default Confirmtiming;