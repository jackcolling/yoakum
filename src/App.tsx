import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import MainContent from './components/MainContent';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Header />
      <MainContent />
    </div>
  );
}