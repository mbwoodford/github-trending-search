import React from 'react';
import { MdStarBorder } from 'react-icons/md';
import Name from './Name';

// name, description, contributors & stars
const ListItem = ({
  index,
  name,
  owner,
  html_url,
  description,
  stargazers_count,
  isSearchView,
  counter
}) => {
  const isSelected = counter === index;

  return (
    <React.Fragment>
      <div className={`list-item ${isSelected ? 'active' : ''}`}>
        <div>
          <div className="file">
            <Name name={name} owner={owner} html_url={html_url}/>
          </div>
          <div className="comment">{description}</div>
          <div>
            <div className="star" title={stargazers_count}>
              <span className="file-icon">
                <MdStarBorder size="20" />
              </span>
              {stargazers_count}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListItem;
