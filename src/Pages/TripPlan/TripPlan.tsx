import React from 'react';
import Dates from './Dates';
import Destiny from './Destiny';
import Transports from './Transports';
import Accomodation from './Accomodation';
import AddPeople from './AddPeople';
import Observations from './Observations';
import Activities from './Activities';
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup'; //Optional for grouping
import ExportToCSV from './ExportToCSV';

interface TripPlanLandingPageProps {
  sessionName: string;
  sessionPassword: string;
}

const TripPlan: React.FC<TripPlanLandingPageProps> = ({ sessionName, sessionPassword }) => {
  // A simple onDelete function that will log a message to the console
  const handleDelete = () => {
    console.log('Delete action triggered for the shopping list');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* Header Section */}
      <header style={headerStyle}>
        <h1 style={{ ...headerTitleStyle, fontFamily: "'Arial', sans-serif" }}>MultiPlan</h1>
      </header>

      {/* Avatar icons */}
      <div style={{ position: 'absolute', top: '20px', right: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
        <Avatar label="J" size="xlarge" shape="circle" />
        <Avatar label="T" size="large" style={{ backgroundColor: '#2196F3', color: '#ffffff' }} shape="circle" />
        <Avatar label="F" style={{ backgroundColor: '#9c27b0', color: '#ffffff' }} shape="circle" />
      </div>

      {/* Main Content Section */}
      <div style={{ display: 'flex', flex: 1 }}>
        {/* Left Section (70%) for Dates, Destiny, Transports, Accomodation */}
        <div
          style={{
            flex: 6,  // 70% of available width
            padding: '20px',
            overflowY: 'auto',  // Enables scrolling
            maxHeight: '100vh', // Ensures content doesn't overflow beyond the viewport
            borderRight: '2px solid #ddd',  // Optional border for separation
            boxSizing: 'border-box', // Ensures padding doesn't affect width
          }}
          className="scroll-container"
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <Dates />
            <Destiny />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
            <Transports />
            <Accomodation />
          </div>
          <Activities />
        </div>

        {/* Right Section (30%) for AddPeople */}
        <div
          style={{
            flex: 4,  // 30% of available width
            padding: '20px',
            overflowY: 'auto', // Enables scrolling
            maxHeight: '100vh', // Ensures content fits within viewport
            boxSizing: 'border-box', // Ensures padding doesn't affect width
          }}
          className="scroll-container"
        >
          <AddPeople id={1} name="Who's Joining?" onDelete={handleDelete} />
          <div style={{ marginBottom: '10px' }}></div>
          <Observations />
          <div style={{ marginBottom: '10px' }}></div>
          <ExportToCSV />
        </div>
      </div>

      <style>
        {`
          /* Hide scrollbar but keep it scrollable */
          .scroll-container::-webkit-scrollbar {
            width: 0px;
            height: 0px;
          }

          .scroll-container {
            overflow-y: scroll; /* Keeps the scrollable area */
          }

          /* Header style */
          header {
            background-color: #007bff;
            color: white;
            padding: 20px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            font-family: 'Roboto', sans-serif; /* Apply Roboto font */
          }
        `}
      </style>
    </div>
  );
};

// Header style with new font and white text
const headerStyle: React.CSSProperties = {
  backgroundColor: '#007bff', // Blue background
  color: 'white', // White text color
  padding: '20px', // Padding around the header
  textAlign: 'center', // Center align the text
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Optional shadow for visual depth
  fontFamily: "'Roboto', sans-serif", // New font family for the header
};

// Title style with white color and larger font size
const headerTitleStyle: React.CSSProperties = {
  margin: 0,
  color: 'white',  // White text color
  fontSize: '2.5em', // Larger font size
  fontWeight: '700', // Bold font weight
  fontFamily: "'Roboto', sans-serif", // Ensure the new font is applied
};

export default TripPlan;
