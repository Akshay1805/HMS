import React from "react";
import Cookies from "js-cookie";
//import { HealmeLogo } from "../../../constants/constants";
//import { HomePagePic } from "../../../constants/constants";
import { useEffect } from "react";
import "./_patient-dashboard.css";


const Patient_dash:React.FC = () => {

    var usr =Cookies.get("patname");
    const LogOut = ()=>{
        Cookies.set("patname","err");
        window.location.href = '/patient_login';
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
                Welcome Fuckinnnggggggg {usr}
            <div className="Buttons">
                <button className="LogoutButton" onClick={LogOut}>
                    Log Out
                </button>
            </div>
        </div>
    )
}

export default Patient_dash;