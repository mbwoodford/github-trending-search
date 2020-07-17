import React from 'react';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  return (
    <div className="list">
      <SidebarItem
        title="name"
      />
      <SidebarItem
        title="owner"
      />
      <SidebarItem
        title="stars"
      />
    </div>
  );
};

export default Sidebar;
