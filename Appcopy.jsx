import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Google from "./Google";
import Dashboard from "./Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";

const App = () => {
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="1008376512069-0knl5bs97udlj29m43hl0prd22qhrt9v.apps.googleusercontent.com">
        <Google />
      </GoogleOAuthProvider>
    );
  };
  return (
    <>
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<GoogleAuthWrapper />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </>
    </>
  );
};

export default App;
