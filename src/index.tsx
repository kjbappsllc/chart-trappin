import 'tailwindcss/tailwind.css'
import React from 'react';
import { createRoot } from 'react-dom/client';
import { AppRouter } from './app.routing';

const container = document.getElementById('root');
const root = createRoot(container!)
root.render(<AppRouter />)