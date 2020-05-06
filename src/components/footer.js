import React from 'react';
import * as Icon from 'react-feather';

function Footer(props) {
  return (
    <footer className="fadeInUp" style={{animationDelay: '2s'}}>
      <h5>We stand with everyone fighting on the frontlines</h5>

      <div className="link">
        <a
          href="https://github.com/krrish7089/cornameter"
          target="_blank"
          rel="noopener noreferrer"
        >
          corona-india
        </a>
      </div>

      <a
        href="https://github.com/krrish7089/cornameter"
        className="button github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon.GitHub />
        <span>Open Sourced on GitHub</span>
      </a>
    </footer>
  );
}

export default React.memo(Footer);
