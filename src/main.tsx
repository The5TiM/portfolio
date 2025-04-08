import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ClickSpark from './components/ClickSpark.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClickSpark >
        <App />
      </ClickSpark>
    </BrowserRouter>
  </StrictMode>,
)
