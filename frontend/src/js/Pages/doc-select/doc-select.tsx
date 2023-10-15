import React, { useState, useEffect } from "react";
import { HealmeLogo } from "../../../constants/constants";
import { DocPic } from "../../../constants/constants";
import './_doc-select.css';
import Cookies from "js-cookie";
import ReactDOM from 'react-dom';
import axios from "axios";

const Doc_Select: React.FC = () => {
    const usr = Cookies.get("patname");
    const handleDoctorButtonClick = (x:string) => {
        Cookies.set('docselect', x);
        window.location.href = '/select-timing'; // Navigate to the desired site
    };

    // Define the state variable and the function to update it
   
    const [data, setdata] = useState([ { name:'err'}, ]);

  const detail = {
    "typ": Cookies.get('doctype')
    
  };
  
   
   

   
    
useEffect(() => {
    // Fetch data from your API or source and update the state
    if (usr === "err") {
        window.location.href = '/patient_login';
      }
    const fetchData = async () => {
        axios.post('/fetchdoctors', detail)
        .then((response) => {
            setdata(response.data);
           
            
            
        })
        .catch((error) => {
            if(data[0].name==='err'){
                alert("Sorry, no doc avalable");
                window.location.href = '/get_appointment';
            }
            console.error("Error fetching data:", error);
           
        });
    };
  
    fetchData(); // Call the fetch data function when the component mounts
  }, [usr]); 

    return (
        <div className="home-page-container">
            <div className="header-container">
                <div className="logo-container">
                    <img className="logo-img" src={HealmeLogo} alt="Logo" />
                </div>
            </div>
            <div>
                listing {Cookies.get('doctype')}
            </div>
            <div className="body-container" id='list'>
                {data.map((item, index) => (
                <div className="doctor-confirm-panel" key={index}>
                        <div className="doc-photo">
                            <img className="doc" src={DocPic} alt="Pic of the doctor" />
                        </div>
                        <div className="appointment-description">
                            <div>
                                {item.name}
                            </div>
                            <div>
                                Consultant - Dental Surgery BDS
                            </div>
                        </div>
                        <button type="button" className="doctor-btn" onClick={()=>handleDoctorButtonClick(item.name)} >
                            Book An Appointment
                        </button>
                </div>
                ))}


            </div>
           
        </div>
    );
}

export default Doc_Select;
