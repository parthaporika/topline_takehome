import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React, { useContext } from "react";
import { ImageContext } from "../App";

const ImageDetails = () => {
    const [imageInfo] = useContext(ImageContext)

    return (
        <div>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={imageInfo.largeImageURL}
                    title={imageInfo.id}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    User: {imageInfo.user}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Tags: {imageInfo.tags}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default ImageDetails