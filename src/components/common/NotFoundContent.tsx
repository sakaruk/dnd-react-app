import React from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';

function NotFoundContent() {
  return (
    <Container data-testid="notFoundContainer">
      <h1>Sorry we did not find the content you were looking for.</h1>

      <p>
        <Link to="/">Go to homepage</Link>
      </p>
    </Container>
  );
}

export default NotFoundContent;
