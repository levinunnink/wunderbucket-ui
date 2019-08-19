import React from 'react';
import PropTypes from 'prop-types';

const SideBar = ({
  sites, user, onSiteSelect, selectedSite,
}) => {
  const navItems = sites.map((site) => (
    <a
      className={`${site.domain === selectedSite && 'selected'}`}
      href={`#${site.domain}`}
      key={site.domain}
      onClick={(e) => {
        e.preventDefault();
        onSiteSelect(site);
      }}
    >{site.domain}</a>
  ));
  return (
    <div className="sidebar">
      <div className="sidebar-inside">
        <h2>Sites</h2>
        <nav>{navItems}</nav>
        <footer>
          <ul>
            <li>{user.email}</li>
            <li>
              <a href="/account">Account</a>
              <a href="/logout">Logout</a>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  sites: PropTypes.array,
  user: PropTypes.shape(),
  selectedSite: PropTypes.string,
  onSiteSelect: PropTypes.func,
};

export default SideBar;
