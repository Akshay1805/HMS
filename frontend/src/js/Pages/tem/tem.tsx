import React, { useEffect,useState } from "react";
import { HealmeLogo } from "../../../constants/constants";
import { DocPic } from "../../../constants/constants";
import Cookies from "js-cookie";
import axios from "axios";
import "./_tem.css";
const Test:React.FC = () => {
        // Sample data
        const data = [
          { name: 'Item 1' },
          { name: 'Item 2' },
          { name: 'Item 3' },
        ];
      
        return (
          <div>
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
            <button type="button" className="doctor-btn" >
                Book An Appointment
            </button>
            </div>
            ))}
          
        </div>
        );
      };
      
      export default Test;