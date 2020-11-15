import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import HelpIcon from '@material-ui/icons/Help';
import {Link} from 'react-router-dom';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div style={{   position: 'absolute' ,
                    bottom:" -80px" ,
                    right: "20px" }}>

        <HelpIcon  onClick={handleClick} className="help"/>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem onClick={handleClose}><Link style={{textDecoration :"none" , color:"black"}} to='/com'>Complaint</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link style={{textDecoration :"none" , color:"black"}} to='/fed'>Feedback</Link></MenuItem>
            <MenuItem onClick={handleClose} disabled>Reach out us</MenuItem>
            <MenuItem onClick={handleClose} disabled>Request service</MenuItem>
        </Menu>

    </div>
  );
}
