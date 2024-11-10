import { StrictMode } from 'react'
import { Button } from 'primereact/button';
import { createRoot } from 'react-dom/client'
import { ReactTogether } from 'react-together'

import App from '@./Pages/ShoppingList/ShoppingListLandingPage'
import LandingPage from '@./App';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactTogether
      sessionParams={{
        appId: 'dev.reacttogether.neeti1',
        apiKey: '2XpVVAOQynrrQDVb1hAxPOVptIf3Lsb747hRcRSRn4',
      }}
    >
      <LandingPage />
    </ReactTogether>
  </StrictMode>
)
