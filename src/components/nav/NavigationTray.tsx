import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../styles/navigation.scss';

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
          <NavLink className='nav-tray_link-list_link' to='/'>
            {/* @ts-ignore */}
            <FontAwesomeIcon className='nav-tray_link-list_link-icon' icon='fa-solid fa-house-flag' />
            Home
          </NavLink>
        </li>
        <li className='nav-tray_link-list_link-container'>
          <NavLink className='nav-tray_link-list_link' to={checkRoundLink()}>
            {/* @ts-ignore */}
            <FontAwesomeIcon className='nav-tray_link-list_link-icon' icon='fa-regular fa-golf-ball-tee' />
            Round
          </NavLink>
        </li>
        <li className='nav-tray_link-list_link-container'>
          <NavLink className='nav-tray_link-list_link' to='/stats/my'>
            {/* @ts-ignore */}
            <FontAwesomeIcon className='nav-tray_link-list_link-icon' icon='fa-duotone fa-arrow-up-1-9' />
            Stats
          </NavLink>
        </li>
        <li className='nav-tray_link-list_link-container'>
          <NavLink className='nav-tray_link-list_link' to='/settings'>
            {/* @ts-ignore */}
            <FontAwesomeIcon className='nav-tray_link-list_link-icon' icon='fa-duotone fa-gears' />
            Account
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default NavigationTray;
