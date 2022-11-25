import { Favorite, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'

const Item = () => {
    return (
        <Card sx={{ margin: 3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="194"
                image="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
            />
            <CardContent>
                <Typography variant='body2' color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dictum metus at consequat faucibus. Donec luctus, ipsum vitae volutpat ullamcorper, nisl ipsum porttitor lectus, et hendrerit lorem quam a orci. Curabitur a dui a arcu hendrerit hendrerit eu sit amet turpis. Fusce in ornare eros. Aenean mollis nisi eget scelerisque varius. Ut posuere purus eu vehicula gravida.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <Favorite />
                </IconButton>
                <IconButton>
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Item