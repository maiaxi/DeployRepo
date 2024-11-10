// ShoppingListSessionJoiner.tsx
import React, { useState } from 'react';
import ShoppingListLandingPage from './ShoppingListLandingPage';

const ShoppingListSessionJoiner: React.FC = () => {
  const [sessionName, setSessionName] = useState<string | null>(null);
  const [sessionPassword, setSessionPassword] = useState<string | null>(null);
  const [joinMode, setJoinMode] = useState<'random' | 'specific' | null>(null);

  const handleCreateRandomSession = () => {
    setSessionName(`session_${Math.random().toString(36).substr(2, 9)}`);
    setSessionPassword(Math.random().toString(36).substr(2, 5)); // Generate a simple random password
    setJoinMode('random');
  };

  const handleJoinSpecificSession = (name: string, password: string) => {
    setSessionName(name);
    setSessionPassword(password);
    setJoinMode('specific');
  };

  if (sessionName && sessionPassword) {
    return (
      <ShoppingListLandingPage
        sessionName={sessionName}
        sessionPassword={sessionPassword}
      />
    );
  }

  return (
    <div>
      <h2>Join Shopping List Session</h2>
      <button onClick={handleCreateRandomSession}>Create Random Session</button>
      <div>
        <h3>Or join an existing session</h3>
        <input
          type="text"
          placeholder="Session Name"
          onChange={(e) => setSessionName(e.target.value)}
        />
        <input
          type="password"
          placeholder="Session Password"
          onChange={(e) => setSessionPassword(e.target.value)}
        />
        <button
          onClick={() =>
            sessionName && sessionPassword
              ? handleJoinSpecificSession(sessionName, sessionPassword)
              : alert('Please enter both name and password')
          }
        >
          Join Session
        </button>
      </div>
    </div>
  );
};

export default ShoppingListSessionJoiner;
