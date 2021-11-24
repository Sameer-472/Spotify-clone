import React from "react";
import "./SideNav.css";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

export const SideNav = () => {
  return (
    <div>
      <div className="nav">
          <img src="./images/logo.png" alt="" className="logo" />
        <ul>
          <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <HomeOutlinedIcon fontSize="large" className="icon"/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <SearchIcon fontSize="large" className="icon"/>
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItemButton>
          </ListItem>
          </List>
        </ul>
      </div>
    </div>
  );
};
