import React from 'react';

const InfoMessage = ({isSearchView}) => {
  if (isSearchView) {
    return (
      <div className="info-message">
        <span>Find the hottest repos created in the last week.</span><br/>
        To use the <em>repo finder</em>. Start typing to filter the trending repos.
        <br/>Use <span className="navigation">↑</span> and{' '}
        <span className="navigation">↓</span> to navigate,{' '}
        <span className="navigation">esc</span> to exit.
      </div>
    );
  }
  return (
    <div className="info-message">
      <span>See the hottest repos created in the last week.</span><br/>
      <span>To use the <em>repo finder</em>, press <span className="navigation">t</span>.</span>
    </div>
  );
};

export default InfoMessage;
