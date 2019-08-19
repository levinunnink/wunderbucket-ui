import React from 'react';
import Sidebar from '../common/Sidebar';
import Site from '../site/Site';

const sitesTmp = [
  { domain: 'sam-nunnink' },
  { domain: 'wunderbucket-desktop-interface-test' },
  { domain: 'my-bucket' },
  { domain: 'nunnink' },
  { domain: 'wunderbucket-home' },
  { domain: 'wunderbucket-html-beta' },
  { domain: 'test' },
  { domain: 'bestonething' },
  { domain: 'smmall' },
];

class Sites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sites: sitesTmp,
      selectedSite: null,
    };
  }

  handleSiteSelected = (selectedSite) => {
    this.setState({ selectedSite });
  }

  render() {
    const { sites } = this.state;
    return (
      <div className="page page--sites">
        <div className="page__inside">
          <Sidebar
            sites={sites}
            user={{}}
            onSiteSelect={this.handleSiteSelected}
          />
          <Site
            site={this.selectedSite}
          />
        </div>
      </div>
    );
  }
}

export default Sites;
