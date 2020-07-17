import React from 'react';
import { AiFillFolder } from 'react-icons/ai';

// owner/name
const Name = ({
  name,
  owner,
  html_url
}) => {

  return (
    <React.Fragment>
      <div>
        <span className="file-icon">
          <AiFillFolder color="#79b8ff" size="20" />
        </span>
        <a href={html_url} className="repoUrl" target="_blank">
          <span className="owner">{`${owner.login} / `}</span>
          <span dangerouslySetInnerHTML={{ __html: name }} className="repoName"></span>
        </a>
      </div>
    </React.Fragment>
  );
};

export default Name;
