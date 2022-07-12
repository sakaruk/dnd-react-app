import React, { useState, useEffect } from 'react';

import { List, ListItem, ListItemText, Typography, CircularProgress, Box } from '@mui/material';

import { Link } from 'react-router-dom';

import SpellType from '../../types/spell-types';
import { useGetSpellsQuery } from '../../context/reducers/spellSlice/spellsApi';
import FavouriteIcon from '../../components/common/FavouriteIcon';

interface SpellListProps {
  searchData: string;
}

function SpellList({ searchData }: SpellListProps) {
  const { data: spellData, error, isLoading } = useGetSpellsQuery();

  /**
   * States defined to handle display searched result
   */
  const [displaySpell, setDisplaySpell] = useState<Array<SpellType.Single>>([]);

  /**
   * Effect triggered to change the displayed spells accoding to the results
   * We are not using the api since we fetch all the results
   */
  useEffect(() => {
    if (spellData) {
      const searchQuery: string = searchData.trim();
      const filterRegex = new RegExp(`^${searchQuery}`, 'i');
      const filteredResult: Array<SpellType.Single> = spellData.results.filter(
        (singleSpell: SpellType.Single) => singleSpell.name.match(filterRegex)
      );
      setDisplaySpell(filteredResult);
    }
  }, [searchData, spellData]);

  /**
   * Returns progress bar when it is loading
   */
  if (isLoading) {
    return (
      <Box
        sx={{
          marginTop: '1em',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  /**
   * Returns error message if API error occurs
   */
  if (error) {
    return (
      <Typography variant="h2" component="h1" gutterBottom>
        Error getting spells from the API
      </Typography>
    );
  }

  return (
    <List data-testid="spellListContainer">
      {displaySpell.map((spellSingle: SpellType.Single) => (
        <ListItem
          key={spellSingle.index}
          secondaryAction={<FavouriteIcon spellIndex={spellSingle.index} />}
        >
          <ListItemText
            primary={
              <Link
                data-testid="spellListLink"
                style={{ display: 'block' }}
                to={`spells/${spellSingle.index}`}
              >
                {spellSingle.name}
              </Link>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default SpellList;
