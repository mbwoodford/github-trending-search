import React from 'react';
import ListItem from './ListItem/ListItem';

// read static data from api.js and display each element of files array
const FilesList = ({ repos, isSearchView, counter }) => {
  return (
    <div className="list">
      {repos.length > 0 ? (
        repos.map((repo, index) => {
          return (
            <ListItem
              key={repo.id}
              {...repo}
              index={index}
              isSearchView={isSearchView}
              counter={counter}
            />
          );
        })
      ) : (
        <div>
          <h3 className="no-result">No repositories trending.</h3>
        </div>
      )}
    </div>
  );
};

export default FilesList;
