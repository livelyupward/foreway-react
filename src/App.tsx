// Libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

// Components
import NavigationTray from './components/nav/NavigationTray';
import Home from './views/Home';
import StartRound from './components/rounds/StartRound';
import Stats from './views/Stats';
import Settings from './views/Settings';

// API
import { getUser } from './api/userFetches';

// Styling
import './App.scss';
import { useEffect, useState } from 'react';

// Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMoon, faRocket, faHouseFlag } from '@fortawesome/free-solid-svg-icons';
import { faGolfBallTee } from '@fortawesome/pro-regular-svg-icons';
import { faGears, faArrowUp19 } from '@fortawesome/pro-duotone-svg-icons';
library.add(faMoon, faRocket, faGolfBallTee, faGears, faHouseFlag, faArrowUp19);

function App() {
  const [user, setUser] = useState(null);

  useEffect((): any => {
    let mounted = true;
    if (localStorage.getItem('gg_token')) {
      getUser(JSON.parse(localStorage.getItem('gg_token') || ''))
        .then((user: any) => {
          setUser(user);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return () => (mounted = false);
  }, []);

  if (!user) {
    console.log('here');

    return (
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENTID}>
        <main>
          <GoogleLogin
            theme={'filled_black'}
            shape={'pill'}
            useOneTap={true}
            onSuccess={async (responseWithCredentials) => {
              getUser(responseWithCredentials).then((user: any) => {
                setUser(user);
              });
            }}
            onError={() => {
              console.log('failed!');
            }}
          />
        </main>
      </GoogleOAuthProvider>
    );
  }
  console.log('there');

  return (
    user && (
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
    )
  );
}

export default App;
