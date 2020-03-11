import React from 'react';
import logo from './logo.png';
import './GettingStarted.module.css';

const GettingStarted = ({ name }) => (
  <div styleName="root">
    <div>
      <img src={logo} styleName="logo" alt="logo" />
    </div>

    <div styleName="title">Welcome to Muil</div>

    <div styleName="text">
      <b>{name}</b>, now that you&apos;ve set up Muil it&apos;s time to write your first template{' '}
      <span role="img" aria-label="fire">
        🔥
      </span>
    </div>

    <a href="https://www.muil.io" target="_blank" rel="noopener noreferrer" styleName="get-started">
      Get Started →
    </a>
  </div>
);

GettingStarted.displayName = 'Getting Started Template';

GettingStarted.dynamicProps = {
  name: 'John',
};

export default GettingStarted;
