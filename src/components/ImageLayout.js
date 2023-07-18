import { ImageList, ImageListItem, ListSubheader, ImageListItemBar, IconButton } from "@mui/material"
import React, { useContext } from "react"
import { ImageContext } from "../App"

const ImageLayout = () => {
    const {response, isLoading, setImageInfo} = useContext(ImageContext)

    const handleImageClick = (img) => {
        setImageInfo(img);
        console.log(img);
    }

    return(
        <div>
            <ImageList sx={{ width: '100%', height: '100%' }} cols={4}>
                {response.map((item) => (
                    <ImageListItem key={item.previewURL}>
                        <img
                            src={`${item.previewURL}`}
                            srcSet={`${item.previewURL}`}
                            alt={item.id}
                            loading="lazy"
                            height={550}
                            width={'100%'}
                            onClick={handleImageClick(item)}
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