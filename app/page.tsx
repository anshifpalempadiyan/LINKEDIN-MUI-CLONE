"use client";
import { Box, Container, Grid, Card, CardContent, Typography } from "@mui/material";
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar'
import Feed from './components/Feed'

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'grey.100', minHeight: '100vh' }}>
      
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: 3, pb: 4 }}>
        <Grid container spacing={3} sx={{ flexWrap: { xs: 'wrap', md: 'nowrap' } }}>
          <Grid item xs={12} md={3} sx={{ minWidth: { md: '250px' } }}>
            <LeftSidebar />
          </Grid>

          <Grid item xs={12} md={6} sx={{ flexGrow: 1, minWidth: { md: '500px' } }}>
            <Feed />
          </Grid>

          <Grid item xs={12} md={3} sx={{ minWidth: { md: '250px' }, display: { xs: 'none', md: 'block' } }}>
            <Card>
              <CardContent>
                <Typography variant="h6">Right Column</Typography>
                <Typography variant="body2" color="text.secondary">
                  LinkedIn News
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}