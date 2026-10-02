import React from "react";
import { Routes, Route } from "react-router-dom";
import Form from "./Form/Form";
import Navbar from "./Navbar/Navbar";
import Data from "./Data/Data";
import Welcome from "./Welcome/Welcome";

function App({ medical, provider }) {
  return (
    <Routes>
      <Route path="/" exact element={<Welcome />} />
      <Route path="/form" element={
        <>
          <Navbar />
          <Form medical={medical} provider={provider} />
        </>
      } />
      <Route path="/data" element={
        <>
          <Navbar />
          <Data />
        </>
      } />
    </Routes>
  );
}

export default App;
