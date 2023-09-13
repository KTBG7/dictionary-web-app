import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-light dark:bg-dark min-h-screen flex justify-center mx-auto px-6 pt-6 md:px-20 md:pt-5 lg:px-40 lg:pt-10">
        <Navbar />
    </div>
  );
}

export default App;
