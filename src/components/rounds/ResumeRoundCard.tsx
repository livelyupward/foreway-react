import React from 'react';

function ResumeRoundCard(props: any) {
  let user = props.user;

  const resumeCurrentRound = () => {
    console.log('Round resumed');
  };

  const cumulativeRoundScore = 32;
  const currentRoundObject = {
    round: {
      course: {
        name: 'Arlington Lakes',
      },
    },
  };

  return (
    <>
      {currentRoundObject && user.currentRound ? (
        <section className='homepage_resume-round_wrapper'>
          <div className='homepage_resume-round_container card header footer'>
            <header className='homepage_resume-round_container-header'>
              <h4 className='homepage_resume-round_container-header_text'>@ {currentRoundObject.round.course.name}</h4>
            </header>
            <div className='homepage_resume-round_container-body'>
              <p>Score: {cumulativeRoundScore}</p>
            </div>
            <footer className='homepage_resume-round_container-footer'>
              <button className='homepage_resume-round_button' onClick={resumeCurrentRound}>
                Resume round
              </button>
            </footer>
          </div>
        </section>
      ) : (
        <>
          <p className='homepage_resume-round_disclaimer'>
            You have no active rounds of golf in progress. To begin a round, simply click on the Round button located in
            the bottom menu of the screen.
          </p>
          ;
        </>
      )}
    </>
  );
}

export default ResumeRoundCard;
