import React, {useState, useContext} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import ThemeContext from "../contexts/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { ethers } from "ethers";

const provider = new ethers.providers.Web3Provider(window.ethereum);

export default function ButtonAppBar() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);

  const connectwalletHandler = () => {
    if (window.ethereum) {
      provider.send("eth_requestAccounts", []).then(async () => {
        await accountChangedHandler(provider.getSigner());
      });
    } else {
      setErrorMessage("Please Install Metamask!!!");
    }
  };
  
  const accountChangedHandler = async (newAccount) => {
    const address = await newAccount.getAddress();
    setDefaultAccount(address);
};

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static" sx={{ borderRadius: 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>

          <Switch color="default" checked={isDark} onChange={toggleTheme} />
          <IconButton>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <Button variant="contained" color="primary"
        style={{ background: defaultAccount ? "#secondary" : "primary" }}
        onClick={connectwalletHandler}
      >
        {defaultAccount ? "connected": "Connect Wallet"}
      </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
