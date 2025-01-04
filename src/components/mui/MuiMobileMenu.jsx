import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { TbBrandTelegram, TbFileCv } from "react-icons/tb";


export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <RxHamburgerMenu size={30} />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><FaHome /> &nbsp; <a href="#top">  Home</a></MenuItem>
        <MenuItem onClick={handleClose}> <IoMdPerson /> &nbsp; <a href="#about"> About Me</a></MenuItem>
        <MenuItem onClick={handleClose}> <FaCode /> &nbsp; <a href="#skills">Skills</a></MenuItem>
        <MenuItem onClick={handleClose}> <CgWebsite /> &nbsp; <a href="#projects">Projects</a></MenuItem>
        <MenuItem onClick={handleClose}> <TbBrandTelegram /> &nbsp; <a href="#contact">Contact</a></MenuItem>
        <hr />
        <MenuItem onClick={handleClose}> <TbFileCv /> &nbsp; <a href="https://drive.google.com/file/d/1hBFS6GCW1Scz8FX65ibFRq1Em4Y_zkxg/view?usp=sharing" target="_blank" rel="noreferrer">View Resume</a></MenuItem>
      </Menu>
    </div>
  );
}
