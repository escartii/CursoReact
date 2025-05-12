import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrimerComponente } from './primerComponente';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimerComponente titulo="Esta seccion es de props"/>
  </StrictMode>
);
