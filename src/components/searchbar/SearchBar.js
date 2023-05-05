import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import { SearchOutlined } from '@mui/icons-material';
import { useEffect, useState } from 'react';

const SearchBar = ({onSearchSubmit, clearResults}) => {
    const [term, setTerm] = useState('');
    const [debouncedTerm, setDebouncedTerm] = useState(term);

    // update 'term' value after 1 second from the last update of 'debouncedTerm'
    useEffect(() => {
        const timer = setTimeout(() => setTerm(debouncedTerm), 1000);
        return () => clearTimeout(timer);
    }, [debouncedTerm])

    // submit a new search
    useEffect(() => {
        if(term !== ''){
            onSearchSubmit(term);
        }
        else{
            clearResults();
        }
    }, [term]);


    return (
        <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '100ch' },
                }}
                noValidate
                autoComplete="off"
                justifyContent={"center"}
                textAlign={"center"}
                >
                <TextField id="outlined-basic" label="Search" variant="outlined" name="search-text" 
                value={debouncedTerm} 
                onSubmit={(e)=>e.preventDefault()}
                onKeyDown={(e)=>{if(e.key === 'Enter'){e.preventDefault()}}}
                onChange={(e)=>{console.log(e.target.value);setDebouncedTerm(e.target.value)}}
                InputProps={{
                    endAdornment: (
                      <IconButton>
                        <SearchOutlined />
                      </IconButton>
                    ),
                  }}/>
            </Box>
    )
};

export default SearchBar;