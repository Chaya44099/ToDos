import React from 'react';
import ReactDOM from 'react-dom/client'; // ייבוא חדש
import App from './App';

const rootElement = document.getElementById('root'); // קבלת אלמנט ה-root
const root = ReactDOM.createRoot(rootElement); // יצירת root חדש
root.render(<App />); // הרכבת האפליקציה
