import React from "react";
import Cookies from "js-cookie";
//import { HealmeLogo } from "../../../constants/constants";
//import { HomePagePic } from "../../../constants/constants";
import { useEffect } from "react";
import "./_patient-settiming.css";



const Doc_setting:React.FC =()=>{
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

        <div>
            vjnsjk njkvfnjk fn
            Book appointment page for {usr}
            You are a patient pola
            <div>
                <button className="LogoutButton" onClick={LogOut}>
                        Log Out
                </button>
            </div>
        </div>
    )


}
export default Doc_setting;