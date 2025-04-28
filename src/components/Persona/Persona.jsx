import React from "react";
import ProfileImage from "../../assets/profile-image.png";

function Persona({ name }) {
    const firstName = name.split(" ")[0]

    return (
        <div className="container my-4">
            <div className="row align-items-center">
                <div className="col-md-8 d-flex align-items-start flex-column">
                    <h1 className="fw-bold">{`Good Morning, ${firstName}`}</h1>
                    <p className="text-muted">Check all your incoming and outgoing transactions here</p>
                </div>
                <div className="col-md-4 text-end d-flex flex-row gap-3 justify-content-end align-items-center">
                    <div>
                        <span className="fw-bold d-block">{name}</span>
                        <span className="text-muted">Personal Account</span>
                    </div>
                    <img
                        src={ProfileImage}
                        alt="Profile"
                        className="rounded-circle mt-2"
                        style={{ width: "50px", height: "50px", border: "2px solid #007bff" }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Persona;