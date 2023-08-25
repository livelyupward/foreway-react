import { useState } from 'react';
import ResumeRoundCard from '../components/rounds/ResumeRoundCard';
import RecentRounds from '../components/rounds/RecentRounds';
import LowestRounds from '../components/rounds/LowestRounds';

function Home() {
  const [getUser, setGetUser] = useState({
    currentRound: 1,
  });

  return (
    <section id='home-page'>
      <h1 className='foreway-header page-title'>Foreway Golf</h1>
      <ResumeRoundCard user={getUser} />
      {getUser && (
        <>
          <RecentRounds />
          <LowestRounds />
        </>
      )}
    </section>
  );
}

export default Home;
