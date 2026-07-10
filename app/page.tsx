"use client";
import { Box, Container, Grid, Card, CardContent, Typography } from "@mui/material";
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <Box sx={{ bgcolor: 'grey.100', minHeight: '100vh' }}>
      
      <Navbar />

      <Container maxWidth="lg" sx={{ pt: 3, pb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent>
                <Typography variant="h6">Left Column</Typography>
                <Typography variant="body2" color="text.secondary">
                  Profile & Navigation
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ minHeight: '60vh' }}>
              <CardContent>
                <Typography variant="h6">Center Column</Typography>
                <Typography variant="body2" color="text.secondary">
                  Main Post Feed
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
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