import React, { useState } from "react";

const FormContainer = ({submitHandler}) => {
  const [river_velocity, setRiverV] = useState(null);
  const [person_velocity, setPersonV] = useState(null);
  const [width, setWidth] = useState(null);
  const [angle_of_swim, setAngle] = useState(null);
  const formSubmit=(e)=>{
      e.preventDefault();
      const params={
          river_velocity,
          width,
          person_velocity,
          angle_of_swim
      }
      submitHandler(params)
  } 
  return (
    <form onSubmit={formSubmit}>
      <div className="form-group">
        <label htmlFor="river_velocity">River Velocity</label>
        <input
          type="Number"
          className="form-control"
          value={river_velocity}
          placeholder="Enter river velocity in m/s"
          onChange={(e) => setRiverV(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="person_velocity">Person Velocity</label>
        <input
          type="Number"
          className="form-control"
          value={person_velocity}
          placeholder="Enter person velocity in m/s"
          onChange={(e) => setPersonV(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="width">River Width</label>
        <input
          type="Number"
          className="form-control"
          value={width}
          placeholder="Enter river width in m"
          onChange={(e) => setWidth(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="angle_of_swin">Angle of Swim</label>
        <input
          type="Number"
          className="form-control"
          value={angle_of_swim}
          placeholder="Enter angle of swim  in degrees"
          onChange={(e) => setAngle(e.target.value)}
        />
      </div>
      
      <button className= 'btn btn-success'type='submit'>calculate</button>
      
    </form>
  );
};

export default FormContainer;
