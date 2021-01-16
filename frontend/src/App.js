import React, { useState } from "react";
import "./App.css";
import FormContainer from "./components/FormContainer";
import Header from "./components/Header";
import axios from "axios";
import Result from "./components/Result";
import Graph from "./components/Graph";

function App() {
  const [result, setResult] = useState(null);
  const [width, setWidth] = useState(null);

  const submitHandler = async (params) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post("http://localhost:5000/", params, config);
    setResult(data);
    setWidth(params.width);
  };
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-6">
            <FormContainer submitHandler={submitHandler} />
          </div>
          <div className="col-5">
            <img
              src="river.svg"
              style={{ maxWidth: "600px" }}
              alt="river svg"
            />
          </div>
        </div>
      </div>
      {result && <Result result={result} />}
      {result && <Graph width={width} result={result} />}
    </div>
  );
}

export default App;
