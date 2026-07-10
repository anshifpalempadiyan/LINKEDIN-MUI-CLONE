import React from 'react';
import { Card, CardContent, Typography, Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import GroupIcon from '@mui/icons-material/Group';
import EventIcon from '@mui/icons-material/Event';


export default function LeftSidebar() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Card>

                <Box sx={{ height: 60, bgcolor: 'grey.300' }} />

                <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mt: -5, pb: 1 }}>

                    <Avatar
                        sx={{ width: 72, height: 72, mb: 1, border: '2px solid white', bgcolor: 'primary.main' }}
                    >
                        A
                    </Avatar>

                    <Typography variant="subtitle1" fontWeight="bold">
                        Anshif Palempadiyan
                    </Typography>

                    <Typography variant="caption" color="text.secondary" align="center">
                        Full Stack Developer
                    </Typography>

                    <Typography variant="caption" color="text.secondary" align="center" sx={{ mt: 0.5 }}>
                        Calicut, India
                    </Typography>

                </CardContent>

            </Card>

            <Card>

                <List dense disablePadding>
                    <ListItem disablePadding>
                        <ListItemButton>
                            {/* <ListItemText
                                primary="Connections"
                                secondary="Grow your network"
                                primaryTypographyProps={{ variant: 'caption', color: 'text.secondary' }}
                                secondaryTypographyProps={{ variant: 'subtitle2', color: 'text.primary', fontWeight: 'bold' }}
                            /> */}
                            <ListItemText
                                primary={<Typography variant="caption" color="text.secondary">Connections</Typography>}
                                secondary={<Typography variant="subtitle2" color="text.primary" fontWeight="bold">Grow your network</Typography>}
                            />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Card>

            <Card>
                <List dense disablePadding>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <BookmarkIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                            </ListItemIcon>
                            {/* <ListItemText primary="Saved items" primaryTypographyProps={{ variant: 'caption', fontWeight: 'bold' }} /> */}
                            <ListItemText primary={<Typography variant="caption" fontWeight="bold">Saved items</Typography>} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <GroupIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                            </ListItemIcon>
                            {/* <ListItemText primary="Groups" primaryTypographyProps={{ variant: 'caption', fontWeight: 'bold' }} /> */}
                            <ListItemText primary={<Typography variant="caption" fontWeight="bold">Groups</Typography>} />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon sx={{ minWidth: 36 }}>
                                <EventIcon fontSize="small" sx={{ color: 'text.secondary' }} />
                            </ListItemIcon>
                            {/* <ListItemText primary="Events" primaryTypographyProps={{ variant: 'caption', fontWeight: 'bold' }} /> */}
                            <ListItemText primary={<Typography variant="caption" fontWeight="bold">Events</Typography>} />
                        </ListItemButton>
                    </ListItem>

                </List>
            </Card>
        </Box>
    )
}