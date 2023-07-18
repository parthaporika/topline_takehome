import { ImageList, ImageListItem, ListSubheader, ImageListItemBar, IconButton } from "@mui/material"
import React, { useContext } from "react"
import { ImageContext } from "../App"

const ImageLayout = () => {
    const {response, isLoading} = useContext(ImageContext)

    return(
        <div>
            <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
                <ImageListItem sx={{width: '10%', margin: 'auto'}} key="Subheader" cols={4}>
                    <ListSubheader component="div">December</ListSubheader>
                </ImageListItem>
                {response.map((item) => (
                    <ImageListItem key={item.previewURL}>
                        <img
                            src={`${item.previewURL}`}
                            srcSet={`${item.previewURL}`}
                            alt={item.id}
                            loading="lazy"
                            height={550}
                            width={'100%'}
                        />
                        <ImageListItemBar
                            title={item.id}
                            subtitle={item.user}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </div>
    )
}

export default ImageLayout