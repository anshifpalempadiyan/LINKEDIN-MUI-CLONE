import React from 'react';
import { AppBar, Toolbar, Typography, Box, Stack, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Navbar() {
    return (
        <AppBar position="sticky" color="inherit" sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
            <Toolbar sx={{ minHeight: '52px !important' }}>
                <Typography
                    variant="h5"
                    sx={{ color: 'primary.main', fontWeight: 'bold', mr: 1 }}
                >
                    in
                </Typography>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', bgcolor: 'grey.100', px: 1, borderRadius: 1 }}>
                    <SearchIcon sx={{ color: 'text.secondary', mr: 1 }} />
                    {/* <TextField
                        placeholder="Search"
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        sx={{ width: '200px' }}
                    /> */}
                    <InputBase placeholder="Search" sx={{ width: '200px' }} />
                </Box>

                <Box sx={{ flexGrow: 1 }} />

                <Stack direction="row" spacing={{ xs: 1, md: 3 }} sx={{ color: 'text.secondary' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', color: 'text.primary', cursor: 'pointer' }}>
                        <HomeIcon />
                        <Typography variant="caption" sx={{ display: { xs: 'none', md: 'block' } }}>Home</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <PeopleIcon />
                        <Typography variant="caption" sx={{ display: { xs: 'none', md: 'block' } }}>My Network</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <WorkIcon />
                        <Typography variant="caption" sx={{ display: { xs: 'none', md: 'block' } }}>Jobs</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <MessageIcon />
                        <Typography variant="caption" sx={{ display: { xs: 'none', md: 'block' } }}>Messaging</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <NotificationsIcon />
                        <Typography variant="caption" sx={{ display: { xs: 'none', md: 'block' } }}>Notifications</Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: 'pointer' }}>
                        <AccountCircleIcon />
                        <Typography variant="caption" sx={{ display: { xs: 'none', md: 'block' } }}>Me</Typography>
                    </Box>
                </Stack>


            </Toolbar>
        </AppBar>
    )

}