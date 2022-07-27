import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
  Typography,
  IconButton
} from '@mui/material';
import { Download as DownloadIcon } from '../../icons/download';
import { Search as SearchIcon } from '../../icons/search';
import { Upload as UploadIcon } from '../../icons/upload';
import { Close } from "@mui/icons-material";
import { useState,useEffect } from 'react';


export const AcademyListToolbar = (props) => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    if (props.params?.searched_name_pattern) {
      setSearchText(props.params?.searched_name_pattern);
    }
  }, [props.params?.searched_name_pattern]);

  const handleClear = () => {
    setSearchText("");
    props.onSearch && props.onSearch("");
  };

  const handleSubmitSearch = () => {
    if (searchText.length > 0) {
      props.onSearch && props.onSearch(searchText);
    } else {
      props.onSearch && props.onSearch("");
    }
  };


  return (
    <Box {...props}>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          m: -1
        }}
      >
        <Typography
          sx={{ m: 1 }}
          variant="h4"
        >
          Academies
        </Typography>
        <Box sx={{ m: 1 }}>
          {/* <Button
          startIcon={(<UploadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Import
        </Button>
        <Button
          startIcon={(<DownloadIcon fontSize="small" />)}
          sx={{ mr: 1 }}
        >
          Export
        </Button> */}
          <Button
            color="primary"
            variant="contained"
            onClick={ props.handleOpenAddAcademy }
          >
            Add Academy
          </Button>
        </Box>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSubmitSearch();
                  }
                }}
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                fullWidth
                size="small"
                onSubmit={handleSubmitSearch}
                InputProps={{
                  sx: { px: 0 },
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleSubmitSearch}>
                        <SvgIcon color="action"
                          fontSize="small">
                          <SearchIcon />
                        </SvgIcon>
                      </IconButton>
                    </InputAdornment>
                  ),
                  startAdornment: searchText?.length > 0 && (
                    <InputAdornment position="start">
                      <IconButton onClick={handleClear}>
                        <SvgIcon color="action"
                          fontSize="small">
                          <Close />
                        </SvgIcon>
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                placeholder="Search"
                variant="outlined"
                color="info"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
