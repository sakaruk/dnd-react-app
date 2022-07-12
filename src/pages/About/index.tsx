import React from 'react';

import { Container, Typography } from '@mui/material';


function About() {
  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        About the app
      </Typography>

      <Typography variant="body1" color="text.secondary">
        This is a React App that gets <strong>Spells</strong> from{' '}
        <a href="http://www.dnd5eapi.co/" target="_blank" rel="noreferrer">
          Dungeons &amp; Dragons 5th Edition API
        </a>{' '}
        and displays the details and enables users to save the spell as favourite
      </Typography>
    </Container>
  );
}

export default About;
