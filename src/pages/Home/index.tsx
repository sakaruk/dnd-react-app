import React, { useEffect, useState } from 'react';

import Container from '@mui/material/Container';

import {
  List,
  ListItem,
  ListItemText,
  Typography,
  IconButton,
  Input,
  InputAdornment,
} from '@mui/material';

import { Star, Search as SearchIcon } from '@mui/icons-material';

import { Link } from 'react-router-dom';

import Header from '../../components/common/Header';
import SpellType from '../../types/spell-types';
import { spellData } from '../../mockData/spells';

function Home() {
  const selectedSpell: Set<string> = new Set(['acid-arrow', 'aid']);

  /**
   * States defined to handle search and display search data
   */
  const [searchData, setSearchData] = useState<string>('');
  const [displaySpell, setDisplaySpell] = useState<Array<SpellType.Single>>([]);

  /**
   * Effect triggered to change the displayed spells accoding to the results
   * We are not using the api since we fetch all the results
   */
  useEffect(() => {
    const searchQuery: string = searchData.trim();
    const filterRegex = new RegExp(`^${searchQuery}`, 'i');
    const filteredResult: Array<SpellType.Single> = spellData.results.filter(
      (singleSpell: SpellType.Single) => singleSpell.name.match(filterRegex)
    );
    setDisplaySpell(filteredResult);
  }, [searchData]);

  /**
   * Method to add or remove the favourite spell
   * @param event
   */
  const addRemoveFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { index, state } = event.currentTarget.dataset;
    console.log('Add remove favourite', index, state);
  };

  return (
    <>
      <Header />

      <Container>
        <Typography variant="h2" component="h1" gutterBottom>
          Spell List
        </Typography>

        <Input
          fullWidth
          id="search-spell-input"
          value={searchData}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchData(event.target.value)
          }
          endAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />

        <List>
          {displaySpell.map((spellSingle: SpellType.Single) => (
            <ListItem
              key={spellSingle.index}
              secondaryAction={
                <IconButton
                  onClick={addRemoveFavourite}
                  data-index={spellSingle.index}
                  data-state={selectedSpell.has(spellSingle.index) ? 'active' : 'inactive'}
                  edge="end"
                  aria-label="favourite"
                >
                  <Star
                    style={{ color: selectedSpell.has(spellSingle.index) ? 'orange' : 'grey' }}
                  />
                </IconButton>
              }
            >
              <ListItemText
                primary={
                  <Link style={{ display: 'block' }} to={`spells/${spellSingle.index}`}>
                    {spellSingle.name}
                  </Link>
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </>
  );
}

export default Home;
