import React from 'react';
import Header from './components/Header';
import './App.scss';
import ActivityComponent from './components/activityComponent/ActivityComponent';


function App() {
  return (
    <>
    <Header />
    <main className="container">
      <ActivityComponent />
    </main>
  </>
  );
}

export default App;
