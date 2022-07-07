import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/common/Header';

function NotFound() {
  return (
    <>
      <Header />
      <main>
        <h1>Sorry we did not find the content you were looking for.</h1>
        <p>
          <Link to="/">Go to homepage</Link>
        </p>
      </main>
    </>
  );
}

export default NotFound;
