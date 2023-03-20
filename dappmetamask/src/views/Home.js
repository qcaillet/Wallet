import React, { useState } from "react";
import { ethers } from "ethers";
import Button from "@mui/material/Button";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


function ContentApp() {

  return (
    <Box
    component="form"
    sx={{
      '& > :not(style)': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
  >

        <Button variant="outlined" >
        Envoyer
      </Button>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
  
    <Button variant="outlined" >
        Retirer
      </Button>
    <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />

    </Box>
  );
}

export default ContentApp;
