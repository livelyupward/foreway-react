import QuickStats from '../components/stats/QuickStats';

function Stats() {
  return (
    <section id='stats-page'>
      <h1 className='stats-page_title page-title'>My Stats</h1>
      <div className='card'>
        <div className='card-header no-pad'>
          <div className='header-buttons'>
            <button className='active'>All-time</button>
            <button disabled>Current year</button>
          </div>
        </div>
        <div className='card-content'>
          <QuickStats />
        </div>
      </div>
    </section>
  );
}

export default Stats;
