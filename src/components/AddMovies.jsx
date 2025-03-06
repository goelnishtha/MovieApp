import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Paper, Grid2 } from '@mui/material';

const AddMovies = () => {
  return (
    <Container>
      <Grid2 container justifyContent="center">
        <Grid2 item xs={12} sm={3} md={3}></Grid2>
        <Grid2 item xs={12} sm={6} md={6}>
          <Paper style={{ padding: 20 }}>
            <form>
              <TextField fullWidth label="Title" margin="normal" />
              <TextField fullWidth label="Year"  type="number" margin="normal"/>
              <TextField fullWidth label="Genre" margin="normal"/>
              <TextField fullWidth label="IMDb Rating" type="number" margin="normal"/>
              <Button variant="contained" color="primary" fullWidth style={{ marginTop: 20 }}>Add Movie </Button>
            </form>
          </Paper>
        </Grid2>
        <Grid2 item xs={12} sm={3} md={3}></Grid2>
      </Grid2>
    </Container>
  );
};

export default AddMovies;