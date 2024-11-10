// ShoppingListSessionJoiner.tsx
import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import ShoppingListSessionInitializer from './ShoppingListSessionInitializer';

const ShoppingListSessionJoiner: React.FC = () => {
  const [sessionName, setSessionName] = useState('');
  const [sessionPassword, setSessionPassword] = useState('');
  const [isSessionStarted, setIsSessionStarted] = useState(false);

  const handleStartSession = () => {
    if (sessionName.trim() && sessionPassword.trim()) {
      setIsSessionStarted(true);
    } else {
      alert("Please enter both a session name and a password.");
    }
  };

  return (
    <div className="app-container">
      {!isSessionStarted ? (
        <div className="session-inputs">
          <h2>Create or Join a Session</h2>
          <div className="input-group">
            <InputText
              value={sessionName}
              onChange={(e) => setSessionName(e.target.value)}
              placeholder="Enter session name"
            />
          </div>
          <div className="input-group">
            <InputText
              type="password"
              value={sessionPassword}
              onChange={(e) => setSessionPassword(e.target.value)}
              placeholder="Enter session password"
            />
          </div>
          <Button label="Start Session" onClick={handleStartSession} />
        </div>
      ) : (
        <ShoppingListSessionInitializer sessionName={sessionName} sessionPassword={sessionPassword} />
      )}
    </div>
  );
};

export default ShoppingListSessionJoiner;
