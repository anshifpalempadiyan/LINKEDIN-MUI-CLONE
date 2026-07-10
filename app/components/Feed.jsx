import React from 'react';
import { Box, Card, CardHeader, CardContent, CardActions, Avatar, Typography, Button, TextField, Stack, Divider } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ArticleIcon from '@mui/icons-material/Article';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';


export default function Feed() {
    return (
        <Stack spacing={3}>

            <Card>
                <CardContent sx={{ pb: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                        <Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>
                        {/* Standard outlined TextField acting as the input */}
                        <TextField
                            placeholder="Start a post"
                            size="small"
                            fullWidth
                            variant="outlined"
                        />
                    </Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
                        <Button startIcon={<ImageIcon color="primary" />} color="inherit">
                            Media
                        </Button>
                        <Button startIcon={<OndemandVideoIcon color="success" />} color="inherit">
                            Video
                        </Button>
                        <Button startIcon={<ArticleIcon color="warning" />} color="inherit">
                            Write article
                        </Button>
                    </Box>
                </CardContent>
            </Card>

            <Divider sx={{ mb: 1 }} />

            <Card>

                {/* <CardHeader
                    avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>}
                    title="Anshif Palempadiyan"
                    subheader="Full Stack Developer | 2h"
                    titleTypographyProps={{ fontWeight: 'bold' }}
                /> */}
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: 'primary.main' }}>A</Avatar>}
                    title={<Typography fontWeight="bold">Anshif Palempadiyan</Typography>}
                    subheader="Full Stack Developer | 2h"
                />

                <CardContent sx={{ pt: 0 }}>
                    <Typography variant="body2" color="text.primary">
                        Excited to share that I'm starting a new development project! Taking some time to dive deep, regain my technical knowledge, and build something truly fit for a professional showcase. Stay tuned for updates on the architecture and the tech stack.
                    </Typography>
                </CardContent>

                <Divider />

                <CardActions sx={{ justifyContent: 'space-around' }}>
                    <Button startIcon={<ThumbUpOutlinedIcon />} color="inherit" size="small">Like</Button>
                    <Button startIcon={<ChatBubbleOutlineOutlinedIcon />} color="inherit" size="small">Comment</Button>
                    <Button startIcon={<ShareOutlinedIcon />} color="inherit" size="small">Share</Button>
                </CardActions>

            </Card>

            <Card>

                {/* <CardHeader
                    avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}>N</Avatar>}
                    title="Nihal Avulan"
                    subheader="Full Stack Developer | 5h"
                    titleTypographyProps={{ fontWeight: 'bold' }}
                /> */}
                <CardHeader
                    avatar={<Avatar sx={{ bgcolor: 'secondary.main' }}>N</Avatar>}
                    title={<Typography fontWeight="bold">Nihal Avulan</Typography>}
                    subheader="Full Stack Developer | 5h"
                />
                <CardContent sx={{ pt: 0 }}>
                    <Typography variant="body2" color="text.primary">
                        Just resolved a tricky deployment issue with our MongoDB cluster and Node backend today. Building robust full-stack applications always brings new challenges, but getting that clean build is always worth it! 🚀
                    </Typography>
                </CardContent>
                <Divider />
                <CardActions sx={{ justifyContent: 'space-around' }}>
                    <Button startIcon={<ThumbUpOutlinedIcon />} color="inherit" size="small">Like</Button>
                    <Button startIcon={<ChatBubbleOutlineOutlinedIcon />} color="inherit" size="small">Comment</Button>
                    <Button startIcon={<ShareOutlinedIcon />} color="inherit" size="small">Share</Button>
                </CardActions>

            </Card>
        </Stack>
    )
}