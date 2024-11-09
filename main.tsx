import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactTogether } from 'react-together'

import App from '@./App'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReactTogether
      sessionParams={{
        appId: "dev.reacttogether.neeti1",
        apiKey: "2XpVVAOQynrrQDVb1hAxPOVptIf3Lsb747hRcRSRn4",
        // Having the two args below will make React Together immediately connect
        // to a new session. Remove them if you want users to start "offline"
        name: "neeti1",
        password: "neeti1",
      }}
    >
      <App />
    </ReactTogether>
  </StrictMode>
)
