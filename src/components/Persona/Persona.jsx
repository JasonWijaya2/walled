import React from "react";
import "../../styles/Persona/Persona.css";
import ProfileImage from "../../assets/profile-image.png";

function Persona() {
    return (
        <div className="persona">
            <div className="greetings">
                <div className="title-greetings">Good Morning, Chelsea</div>
                <div className="subtitle-greetings">
                    Check all your incoming and outgoing transactions here
                </div>
            </div>
            <div className="profile">
                <div className="detail-account">
                    <div className="account-name">Chelsea Immanuela</div>
                    <div className="account-type">Personal Account</div>
                </div>
                <div className="profile-image">
                    <img src={ProfileImage} alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default Persona;