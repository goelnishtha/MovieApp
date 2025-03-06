import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Container, Grid } from '@mui/material';

const ListMovies = ({ movies }) => {
  return (
    <Container>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={10} md={8}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell><b>Title</b></TableCell>
                  <TableCell><b>Year</b></TableCell>
                  <TableCell><b>Genre</b></TableCell>
                  <TableCell><b>IMDb Rating</b></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {movies.map((movie) => (
                  <TableRow key={movie.id}>
                    <TableCell>{movie.title}</TableCell>
                    <TableCell>{movie.year}</TableCell>
                    <TableCell>{movie.genre}</TableCell>
                    <TableCell>{movie.rating}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ListMovies;