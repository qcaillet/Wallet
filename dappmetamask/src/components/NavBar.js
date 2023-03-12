import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Switch from "@mui/material/Switch";
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function ButtonAppBar() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ borderRadius: 1 }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Switch color="default" checked={isDark} onChange={toggleTheme} />
          <IconButton>
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
          <Button variant="contained" color="primary">
            Connect wallet
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
