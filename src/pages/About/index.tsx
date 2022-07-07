import React from 'react';
import Header from '../../components/common/Header';

function About() {
  return (
    <>
      <Header />
      <main>
        <h2>About the app</h2>
        <p>
          This is a React App that gets <strong>Spells</strong> from{' '}
          <a href="http://www.dnd5eapi.co/">Dungeons &amp; Dragons 5th Edition API</a> and displays{' '}
          the details and enables users to save the spell as favourite
        </p>
      </main>
    </>
  );
}

export default About;
