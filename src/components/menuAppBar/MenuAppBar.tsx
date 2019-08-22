import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import './style.css';

const ButtonAppBar = (props: any) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const menuItems = [
    { name: 'Home', route: '/'},
    { name: 'Translation', route: '/translation'}
  ];

  const goTo = (route: string) => {
    handleClose();
    props.history.push(route);
  };

  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <AppBar position="static" className="MenuAppBar">
        <Toolbar>
          <IconButton
          aria-owns={anchorEl ? 'simple-menu' : undefined}
          aria-haspopup="true"
          color="inherit"
          onClick={handleClick}>
            <MenuIcon/>
          </IconButton>
          <div className="MenuSpace">
          </div>
          <Button color="inherit" onClick={() => goTo('/')}>Micheline / Michelson Translator v0.01</Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {menuItems.map((item, key) => {
              return <MenuItem onClick={() => goTo(item.route)} key={key}>{item.name}</MenuItem>
            })}
          </Menu>
        </Toolbar>
      </AppBar>
    );
};

export default withRouter(ButtonAppBar);
