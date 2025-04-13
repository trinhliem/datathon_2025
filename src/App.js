import React, { useState } from "react";
import "./App.css";

function App() {
    const [view, setView] = useState("form");
    const [patientData, setPatientData] = useState({
        name: "",
        age: "",
        sex: "",
        p1: "",
        p2: "",
        p3: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPatientData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setView("results");
    };

    return (
        <div>
            <div className="header">
                <span>❤️</span>
                <h1>
                    {view === "form"
                        ? "Predict your patient’s risk of heart disease with AI."
                        : `We got your results for ${patientData.name || "your patient"}.`}
                </h1>
            </div>

            {view === "form" ? (
                <div className="container">
                    <h2>Get started</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Patient name</label>
                            <input type="text" name="name" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Age</label>
                            <input type="number" name="age" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Sex</label>
                            <input type="text" name="sex" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Placeholder 1</label>
                            <input type="text" name="p1" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Placeholder 2</label>
                            <input type="text" name="p2" onChange={handleChange} />
                        </div>
                        <div className="input-group">
                            <label>Placeholder 3</label>
                            <input type="text" name="p3" onChange={handleChange} />
                        </div>
                        <button type="submit">Predict your risk</button>
                    </form>
                </div>
            ) : (
                <div className="container">
                    <div className="result-box">Data goes here</div>
                    <button onClick={() => setView("form")} style={{ marginTop: "20px" }}>
                        ← Back
                    </button>
                </div>
            )}
        </div>
    );
}

export default App;

