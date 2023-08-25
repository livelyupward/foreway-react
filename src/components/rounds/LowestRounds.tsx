import React from 'react';
import '../../styles/lowestRounds.scss';

function LowestRounds() {
  if (1 === 2) {
    return (
      <section className='homepage_best-rounds card'>
        <h2 className='homepage_best-best_header card-header'>Lowest Rounds</h2>
        <table className='homepage_best-round_table'>
          <thead className='homepage_best-round_table-head'>
            <tr className='homepage_best-round_table-head_row'>
              <th className='homepage_best-round_table-head_row-header date'>Date</th>
              <th className='homepage_best-round_table-head_row-header course-name'>Course</th>
              <th className='homepage_best-round_table-head_row-header score'>Score</th>
            </tr>
          </thead>
          <tbody className='homepage_best-round_table-body'>
            <tr className='homepage_best-round_table-body_row'>
              <td className='homepage_best-round_table-body_row-cell'></td>
              <td className='homepage_best-round_table-body_row-cell'></td>
              <td className='homepage_best-round_table-body_row-cell'></td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }

  return (
    <section className='homepage_best-rounds card'>
      <h2 className='homepage_best-best_header card-header'>Lowest Rounds</h2>
      <p className='homepage_best-round_disclaimer'>
        This will show your lowest rounds once you've played 6 or more rounds.
      </p>
    </section>
  );
}

export default LowestRounds;
