import { createBrowserRouter } from 'react-router-dom';
import Home from './views/Home';
import StartRound from './components/rounds/StartRound';

export default createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/round',
    element: <StartRound />,
  },
]);
