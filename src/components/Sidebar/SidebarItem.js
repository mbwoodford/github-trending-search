import React from 'react';

// name, description, contributors & stars
const SidebarItem = ({
  title
}) => {

  return (
    <React.Fragment>
      <div>
        <div>
          <div className="file">
            <span>{title}</span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SidebarItem;
