import { Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import Search from './Search'

const Header = () => {
    return(
        <div>
            <Card sx={{backgroundColor: '#1C598B'}}>
                <CardContent sx={{width: '15%', margin: 'auto'}}>
                    <Typography fontSize={30}>
                        Image Search
                    </Typography>
                    <Search></Search>
                </CardContent>
            </Card>
        </div>
    )
}

export default Header