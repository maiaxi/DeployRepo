// ShoppingListSessionInitializer.tsx
import React from 'react';
import { ReactTogether } from 'react-together';
import TripPlan from './TripPlan';

interface TripPlanSessionInitializerProps {
  sessionName: string;
  sessionPassword: string;
}

const TripPlanSessionInitializer: React.FC<TripPlanSessionInitializerProps> = ({ sessionName, sessionPassword }) => {
  return (
    <ReactTogether
      sessionParams={{
        appId: 'dev.reacttogether.neeti1',
        apiKey: '2XpVVAOQynrrQDVb1hAxPOVptIf3Lsb747hRcRSRn4',
        name: sessionName,
        password: sessionPassword,
      }}
    >
      <TripPlan sessionName={sessionName} sessionPassword={sessionPassword} />
    </ReactTogether>
  );
};

export default TripPlanSessionInitializer;
