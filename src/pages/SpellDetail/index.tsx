import React from 'react';

import { useParams } from 'react-router-dom';

import { Chip, Container, Grid, Stack, Typography } from '@mui/material';

import Header from '../../components/common/Header';
import SpellType from '../../types/spell-types';
import { spellDetail } from '../../mockData/spells';

function SpellDetail() {
  const { index: spellIndex } = useParams();
  return (
    <>
      <Header />

      <Container>
        <Typography variant="h2" component="h1">
          {spellDetail.name}
        </Typography>

        <Typography variant="subtitle2" gutterBottom>
          {spellIndex}
        </Typography>

        <Grid container spacing={1} alignItems="flex-end">
          <Grid item xs={3} sm={2}>
            <Typography variant="body1" gutterBottom>
              <strong>Class</strong>
            </Typography>
          </Grid>
          <Grid item xs={9} sm={10}>
            <Stack direction="row" spacing={1}>
              {spellDetail.classes.map((spellClass: SpellType.Class) => (
                <Chip
                  key={spellClass.index}
                  label={spellClass.name}
                  color="primary"
                  variant="outlined"
                  sx={{ alignSelf: 'end' }}
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={3} sm={2}>
            <Typography variant="body1" gutterBottom>
              <strong>Sub Class</strong>
            </Typography>
          </Grid>
          <Grid item xs={9} sm={10}>
            <Stack direction="row" sx={{ justifySelf: 'end' }} spacing={1}>
              {spellDetail.subclasses.map((spellSubClass: SpellType.SubClass) => (
                <Chip
                  key={spellSubClass.index}
                  label={spellSubClass.name}
                  size="small"
                  color="secondary"
                  variant="outlined"
                />
              ))}
            </Stack>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
              {spellDetail.material}
            </Typography>

            <Typography variant="h5" gutterBottom>
              {spellDetail.higher_level}
            </Typography>

            <Typography variant="body2" gutterBottom>
              {spellDetail.desc}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default SpellDetail;
