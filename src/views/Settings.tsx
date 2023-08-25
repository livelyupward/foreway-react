import { useState } from 'react';
import FriendsCard from '../components/friends/FriendsCard';
import PreferencesCard from '../components/preferences/PreferencesCard';

function Settings() {
  const [activeTab, setActiveTab] = useState(0);

  let activeTabContent;

  if (activeTab === 0) {
    activeTabContent = <FriendsCard />;
  } else if (activeTab === 1) {
    activeTabContent = <PreferencesCard />;
  }

  return (
    <section id='account-page'>
      <h1 className='account-page_title page-title'>My Account</h1>
      <div className='account-page_card card tabs'>
        <div className='card-tabs_tab-list'>
          <button onClick={() => setActiveTab(0)} id='friends'>
            Friends
          </button>
          <button onClick={() => setActiveTab(1)} id='preferences'>
            Preferences
          </button>
        </div>
        <div className='card-tabs_tab-content'>{activeTabContent}</div>
      </div>
    </section>
  );
}

export default Settings;
