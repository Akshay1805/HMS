import React from "react";
import Cookies from "js-cookie";
//import { HealmeLogo } from "../../../constants/constants";
//import { HomePagePic } from "../../../constants/constants";
import { useEffect } from "react";
import "./_doctor-dashboard.css";


const Doctor_dash:React.FC = () => {

    var usr =Cookies.get("docname");
    const LogOut = ()=>{
        Cookies.set("docname","err");
        window.location.href = '/doctor_login';
    }
    const SetTiming = ()=>{
        window.location.href = '/doctor_set_timing';
    }
    useEffect(() => {
        //Runs on every render
        usr=Cookies.get("docname");
        if(usr==="err"){
            window.location.href = '/doctor_login';
        }
      });
    
    return(
        <div className="header_container">
                Welcome Fuckinnnggggggg {usr}
            <div className="Buttons">
                <button className="LogoutButton" onClick={LogOut}>
                    Log Out
                </button>
                <button className="SetTimingButton" onClick={SetTiming}>
                    Set timing
                </button>
            </div>
        </div>
    )
}

export default Doctor_dash;