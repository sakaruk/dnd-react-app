import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';

import Header from '../../components/common/Header';

function NotFound() {
  return (
    <>
      <Header />

      <Container>
        <h1>Sorry we did not find the content you were looking for.</h1>

        <p>
          <Link to="/">Go to homepage</Link>
        </p>
      </Container>
    </>
  );
}

export default NotFound;
