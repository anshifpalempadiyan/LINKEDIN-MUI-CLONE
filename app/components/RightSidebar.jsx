import React from 'react';
import { Card, CardHeader, CardContent, List, ListItem, ListItemButton, ListItemIcon, ListItemText, IconButton, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';


export default function RightSidebar() {
    return (
        <Card>
            {/* <CardHeader
                title="LinkedIn News"
                titleTypographyProps={{ variant: 'subtitle1', fontWeight: 'bold' }}
                action={
                    <IconButton size="small">
                        <InfoIcon fontSize="small" />
                    </IconButton>
                }
                sx={{ pb: 0 }}
            /> */}
            <CardHeader
                title={<Typography variant="subtitle1" fontWeight="bold">LinkedIn News</Typography>}
                action={<IconButton size="small"><InfoIcon fontSize="small" /></IconButton>}
                sx={{ pb: 0 }}
            />

            <CardContent sx={{ pt: 1, pb: '8px !important' }}>

                <Typography variant="body2" color="text.secondary" fontWeight="bold" sx={{ mb: 1 }}>
                    Top stories
                </Typography>

                <List dense disablePadding>
                    <ListItem disablePadding alignItems="flex-start">
                        <ListItemButton sx={{ py: 0.5, px: 0 }}>

                            {/* <ListItemText
                                primary="The sports conversations to join"
                                secondary="10h ago • 8,346 readers"
                                primaryTypographyProps={{ variant: 'body2', fontWeight: 'bold', color: 'text.primary' }}
                                secondaryTypographyProps={{ variant: 'caption' }}
                            /> */}
                            <ListItemText
                                primary={<Typography variant="body2" fontWeight="bold" color="text.primary">The sports conversations to join</Typography>}
                                secondary={<Typography variant="caption">10h ago • 8,346 readers</Typography>}
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding alignItems="flex-start">
                        <ListItemButton sx={{ py: 0.5, px: 0 }}>

                            {/* <ListItemText
                                primary="Gujarat launches its first data centre"
                                secondary="7h ago • 557 readers"
                                primaryTypographyProps={{ variant: 'body2', fontWeight: 'bold', color: 'text.primary' }}
                                secondaryTypographyProps={{ variant: 'caption' }}
                            /> */}
                            <ListItemText
                                primary={<Typography variant="body2" fontWeight="bold" color="text.primary">Gujarat launches its first data centre</Typography>}
                                secondary={<Typography variant="caption">7h ago • 557 readers</Typography>}
                            />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disablePadding alignItems="flex-start">
                        <ListItemButton sx={{ py: 0.5, px: 0 }}>

                            {/* <ListItemText
                                primary="AI makes consulting faster"
                                secondary="4h ago • 408 readers"
                                primaryTypographyProps={{ variant: 'body2', fontWeight: 'bold', color: 'text.primary' }}
                                secondaryTypographyProps={{ variant: 'caption' }}
                            /> */}
                            <ListItemText
                                primary={<Typography variant="body2" fontWeight="bold" color="text.primary">AI makes consulting faster</Typography>}
                                secondary={<Typography variant="caption">4h ago • 408 readers</Typography>}
                            />
                        </ListItemButton>
                    </ListItem>

                </List>
            </CardContent>
        </Card>
    )
}