import { Link } from 'react-router-dom';

function NavigationTray() {
  const checkRoundLink = () => {
    // if (getUser.value?.currentRound) {
    //   return `/round/${getUser.value.currentRound}`;
    // } else {
    return `/round`;
    // }
  };

  return (
    <aside id='navigation-tray'>
      <ul className='nav-tray_link-list'>
        <li className='nav-tray_link-list_link-container'>
          <Link to='/'>
            {/* <FontAwesomeIcon icon={icon({ name: 'house-chimney' })} /> */}
            Home
          </Link>
        </li>
        <li className='nav-tray_link-list_link-container'>
          <Link to={checkRoundLink()}>
            {/* <FontAwesomeIcon icon={icon({ name: 'golf-ball-tee' })} /> */}
            Round
          </Link>
        </li>
        <li className='nav-tray_link-list_link-container'>
          <Link to='/stats/my'>
            {/* <FontAwesomeIcon icon={icon({ name: 'list-ol' })} /> */}
            Stats
          </Link>
        </li>
        <li className='nav-tray_link-list_link-container'>
          <Link to='/settings'>
            {/* <FontAwesomeIcon icon={icon({ name: 'user-gear' })} /> */}
            Account
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default NavigationTray;
