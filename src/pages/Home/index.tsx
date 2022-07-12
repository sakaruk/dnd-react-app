import React, { useState } from 'react';

import Container from '@mui/material/Container';

import { Typography, Input, InputAdornment } from '@mui/material';

import { Search as SearchIcon } from '@mui/icons-material';

import SpellList from './SpellList';

function Home() {
  /**
   * States defined to handle search and display search data
   */
  const [searchData, setSearchData] = useState<string>('');

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Spell List
      </Typography>

      <Input
        autoComplete="off"
        fullWidth
        id="search-spell-input"
        placeholder="Search"
        value={searchData}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchData(event.target.value)}
        endAdornment={
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        }
      />

      <SpellList searchData={searchData} />
    </Container>
  );
}

export default Home;
