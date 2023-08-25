// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
// import NavigationTray from './components/nav/NavigationTray';

// function App() {
//   return (
//     <Router>
//       {' '}
//       {/* Place the Router component here */}
//       <NavigationTray />
//       {/* Render your other route-dependent components here */}
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationTray from './components/nav/NavigationTray';

import Home from './views/Home';
import StartRound from './components/rounds/StartRound';
import Stats from './views/Stats';
import Settings from './views/Settings';

import './App.scss';
import './styles/navigation.scss';

function App() {
  return (
    <Router>
      <div id='app-container'>
        <NavigationTray />
        <main id='main-panel'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/round' element={<StartRound />} />
            <Route path='/stats/my' element={<Stats />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
