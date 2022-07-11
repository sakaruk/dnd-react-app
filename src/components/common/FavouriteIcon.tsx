import React from 'react';
import { useSelector } from 'react-redux';

import { IconButton } from '@mui/material';
import { Star } from '@mui/icons-material';

import {
  addRemoveFavouriteSpell,
  FavouritePayload,
  getFavouriteSpells,
} from '../../context/reducers/spellSlice';
import { useAppDispatch } from '../../lib/hooks';

interface FavouriteIconProps {
  spellIndex: string;
}

function FavouriteIcon({ spellIndex }: FavouriteIconProps) {
  const dispatch = useAppDispatch();
  /**
   * State to get all the favourite spells
   */
  const favouriteSpell: Array<string> = useSelector(getFavouriteSpells);

  /**
   * Method to add or remove the favourite spell
   * @param event
   */
  const addRemoveFavourite = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { index, state } = event.currentTarget.dataset;
    if (index && (state === 'active' || state === 'inactive')) {
      const addRemovePayload: FavouritePayload = {
        index,
        currentState: state,
      };
      dispatch(addRemoveFavouriteSpell(addRemovePayload));
    }
  };

  return (
    <IconButton
      onClick={addRemoveFavourite}
      data-index={spellIndex}
      data-state={favouriteSpell.includes(spellIndex) ? 'active' : 'inactive'}
      edge="end"
      aria-label="favourite"
    >
      <Star
        style={{
          color: favouriteSpell.includes(spellIndex) ? 'orange' : 'grey',
        }}
      />
    </IconButton>
  );
}

export default FavouriteIcon;
