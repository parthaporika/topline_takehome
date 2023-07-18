import { Button, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ImageContext } from '../App';

const Search = () => {
    const [searchValue, setSearchValue] = useState("");
    const { fetchData } = useContext(ImageContext);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    const handleButtonSearch = () => {
        fetchData(`?key=${process.env.REACT_APP_PIXELBAY_API_KEY}&q=${encodeURIComponent(searchValue)}`)
        setSearchValue("");
    }

    const handleEnterSearch = (e) => {
        if (e.key === 'Enter') {
            fetchData(`?key=${process.env.REACT_APP_PIXELBAY_API_KEY}&q=${encodeURIComponent(searchValue)}`)
            setSearchValue("");
        }
    }

    return(
        <div>
            <TextField id="outlined-basic" label="Search Images" variant="outlined" value={searchValue} onChange={handleInputChange} onKeyDown={handleEnterSearch}/>
            <Button variant='contained' onClick={handleButtonSearch} disabled={!searchValue}>Search</Button>
        </div>
    )
}

export default Search