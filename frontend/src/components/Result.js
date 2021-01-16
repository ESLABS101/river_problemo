import React from "react";

const Result = ({result}) => {
  return (
    <div className="container" style={{marginTop:"30px"}}>
      <h3 style={{color:'white'}}>Result</h3>

      <div className="card" style={{ width: "18rem" }}>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">time taken : {result.time_taken}</li>
          <li className="list-group-item">displacement : {result.displacement}</li>
          
        </ul>
      </div>
    </div>
  );
};

export default Result;
