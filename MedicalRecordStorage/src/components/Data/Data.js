import React, { useEffect, useState } from "react";
import "./data.css";

function Data() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const storedRecords = localStorage.getItem("medicalRecords");
    if (storedRecords) {
      setRecords(JSON.parse(storedRecords));
    }
  }, []);

  return (
    <div className="data-container">
      <h1 className="data-header">Stored Medical Records</h1>
      {records.length > 0 ? (
        <div className="records-list">
          {records.map((record, index) => (
            <div className="record-item" key={index}>
              <div className="record-field"><strong>Name:</strong> {record.name}</div>
              <div className="record-field"><strong>Age:</strong> {record.age}</div>
              <div className="record-field"><strong>Gender:</strong> {record.gender}</div>
              <div className="record-field"><strong>Blood Type:</strong> {record.bloodType}</div>
              <div className="record-field"><strong>Allergies:</strong> {record.allergies}</div>
              <div className="record-field"><strong>Diagnosis:</strong> {record.diagnosis}</div>
              <div className="record-field"><strong>Treatment:</strong> {record.treatment}</div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-records">No medical records found in storage.</p>
      )}
    </div>
  );
}

export default Data;
