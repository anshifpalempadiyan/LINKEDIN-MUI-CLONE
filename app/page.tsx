"use client";
import { Box, Container, Grid, Card, CardContent, Typography } from "@mui/material";
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import Feed from './components/Feed'
import RightSidebar from './components/RightSidebar'

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'grey.100', minHeight: '100vh' }}>
      
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: 3, pb: 4 }}>
        <Grid container spacing={3} >
          <Grid size={{ xs: 12, md: 4, lg: 3 }} >
            <LeftSidebar />
          </Grid>

          <Grid size={{ xs: 12, md: 8, lg: 6 }}>
            <Feed />
          </Grid>

          <Grid size={{ xs: 12, lg: 3 }} sx={{ display: { xs: 'none', lg: 'block' } }}>
            <RightSidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}