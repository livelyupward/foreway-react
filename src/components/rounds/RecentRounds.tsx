import React from 'react';
import '../../styles/recentRounds.scss';

function RecentRounds() {
  if (1 === 1) {
    return (
      <>
        <section className='homepage_recent-rounds card'>
          <h2 className='homepage_recent-rounds_header card-header'>Recent Rounds</h2>
          <table
            className='homepage_recent-round_table'
            v-if="recentRounds.length && typeof strokesTotalled === 'function'"
          >
            <thead className='homepage_recent-round_table-head'>
              <tr className='homepage_recent-round_table-head_row'>
                <th className='homepage_recent-round_table-head_row-header date'>Date</th>
                <th className='homepage_recent-round_table-head_row-header course-name'>Course</th>
                <th className='homepage_recent-round_table-head_row-header score'>Score</th>
              </tr>
            </thead>
            <tbody className='homepage_recent-round_table-body'>
              <tr className='homepage_recent-round_table-body_row'>
                <td className='homepage_recent-round_table-body_row-cell'></td>
                <td className='homepage_recent-round_table-body_row-cell'></td>
                <td className='homepage_recent-round_table-body_row-cell'></td>
              </tr>
            </tbody>
          </table>
        </section>
      </>
    );
  }

  return (
    <p className='homepage_recent-rounds_disclaimer'>
      Once you have recorded a round, your recent rounds will appear here.
    </p>
  );
}

export default RecentRounds;
