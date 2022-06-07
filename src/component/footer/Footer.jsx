import React from "react";
import './footer.css';
import 'bootstrap/dist/css/bootstrap.css';



const footer = (props) => {
    return (
        <div className="main-footer px-5"> 
            <div className="container-1">
                <div className="row">
                    {/* col1  */}
                    <div className="col text-white">
                        <h4>Martology</h4>
                        <ul className="list-item">
                            <li>+234 8136 6173 48</li>
                            <li> FHA Lugbe Abuja </li>
                            <li> 123 south North</li>
                        </ul>
                    </div>
                    {/* col2 */}
                    
                    <div className="col text-white">
                        <h4>Staff</h4>
                        <ul className="list-item">
                        <li>+234 8136 6173 48</li>
                            <li> FHA Lugbe Abuja </li>
                            <li> 123 south North</li>
                        </ul>
                    </div>
                    {/* col3 */}
                    <div className="col text-white">
                        <h4>Our Core Details</h4>
                        <ul className="list-item">
                            <li>+234 8136 6173 48</li>
                            <li> FHA Lugbe Abuja </li>
                            <li> 123 south North</li>
                        </ul>
                    </div> 
                    <hr/>
                        <div className="row text-white">
                            <div className="col-sm">
                                &copy;{new Date().getFullYear()} Martology All Right Reservered | Terms And Services | Privacy<p> {props.TheDate}  {props.foot}</p>
                            </div>
                        </div>
                </div>
               
                
            </div>
        </div>

    )
}
export default footer