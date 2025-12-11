import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { EclatDesignApp } from './EclatDesignApp'

// Styles globales
import 'normalize.css';
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <EclatDesignApp />
      </BrowserRouter>
  </StrictMode>,
)
