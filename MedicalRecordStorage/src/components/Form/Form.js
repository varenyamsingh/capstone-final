import React, { useState } from "react";
import "./form.css";

function Form() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [bloodType, setBloodType] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diagnosis, setDiagnosis] = useState("");
  const [treatment, setTreatment] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Retrieve existing records from local storage
    const existingRecords = JSON.parse(localStorage.getItem("medicalRecords")) || [];
    
    // Create a new record
    const newRecord = { name, age, gender, bloodType, allergies, diagnosis, treatment };
    
    // Append the new record to existing records
    existingRecords.push(newRecord);
    
    // Store updated records in local storage
    localStorage.setItem("medicalRecords", JSON.stringify(existingRecords));

    // Clear form after successful submission
    setName("");
    setAge("");
    setGender("");
    setBloodType("");
    setAllergies("");
    setDiagnosis("");
    setTreatment("");

    alert("Record submitted successfully!");
  };

  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <h1>Patient Details</h1>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required />
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input type="text" placeholder="Blood Type" value={bloodType} onChange={(e) => setBloodType(e.target.value)} required />
        <input type="text" placeholder="Allergies" value={allergies} onChange={(e) => setAllergies(e.target.value)} />
        <input type="text" placeholder="Diagnosis" value={diagnosis} onChange={(e) => setDiagnosis(e.target.value)} />
        <input type="text" placeholder="Treatment" value={treatment} onChange={(e) => setTreatment(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Form;
