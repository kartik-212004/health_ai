import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css'

import LandingPage from "./pages/LandingPage.tsx";
import SurveyPage from "./pages/SurveyPage.tsx";
import ConsultationPage from "./pages/ConsultationPage.tsx";
import Patient from "./components/consultation/patient/Patient.jsx";
import ChatBot from "./components/consultation/Chatbot/Chat.jsx";
import Doctor from "./components/consultation/Doctor/Doctor.jsx";
import Logout from "./components/consultation/Logout/Logout.jsx";
import Schedule from "./components/consultation/Doctor/Schedule.jsx";
import Room from "./components/consultation/Doctor/Room.jsx";
import PatientDataVisual from "./components/consultation/Doctor/PatientDataVisual.jsx";
import AiDoc from "./components/consultation/patient/AiDoc.jsx";
import PageNotFound from "./components/consultation/PageNotFound/PageNotFound.jsx";
import RequestConsultation from "./components/consultation/patient/RequestConsulation.jsx";
import UploadReports from "./components/consultation/patient/UploadReports.jsx";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { Analytics } from "@vercel/analytics/react";

// Define loader functions for routes that need them
const chatBotLoader = async () => {
    // You can fetch data here if needed
    // For now, we'll just return a static role
    return { role: "patient" };
};

const router = createBrowserRouter([
    { path: "/", element: <LandingPage /> },
    { path: "/survey", element: <SurveyPage /> },
    { path: "/consultation", element: <ConsultationPage /> },
    { path: "/consultation/doctor", element: <Doctor /> },
    { path: "/consultation/patient", element: <Patient /> },
    {
        path: "/consultation/chat_bot",
        element: <ChatBot />,
        loader: chatBotLoader
    },
    { path: "/consultation/logout", element: <Logout /> },
    { path: "/consultation/doctor/schedule", element: <Schedule /> },
    { path: "/consultation/doctor/schedule/:id", element: <Room /> },
    { path: "/consultation/doctor_data_visualization", element: <PatientDataVisual /> },
    { path: "/consultation/patient_request_consultation", element: <RequestConsultation /> },
    { path: "/consultation/ai_doctor", element: <AiDoc /> },
    { path: "/consultation/upload_reports", element: <UploadReports /> },
    { path: "*", element: <PageNotFound /> },
]);

function App() {
    return (
        <GoogleOAuthProvider clientId="1011414615826-gnek02s2mud1upst69nre87fkfpu7151.apps.googleusercontent.com">
            <RouterProvider router={router} />
            <Analytics />
        </GoogleOAuthProvider>
    );
}

export default App;