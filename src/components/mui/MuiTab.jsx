import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import MuiCard from './MuiCard';

import ReactProject from '../../assets/js/react';
import PsdProjects from '../../assets/js/pst-to-html';
import PhpProject from '../../assets/js/php';
import LaravelProject from '../../assets/js/laravel';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered indicatorColor='secondary' textColor='secondary'>
          <Tab label="PSD to HTML" {...a11yProps(0)} />
          <Tab label="React" {...a11yProps(1)} />
          <Tab label="PHP" {...a11yProps(2)} />
          <Tab label="Laravel" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PsdProjects.map((project) => (
            <MuiCard key={project.id} title={project.title} details={project.details} image={project.image} link={project.link} />
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {ReactProject.map((project) => (
            <MuiCard key={project.id} title={project.title} details={project.details} image={project.image} link={project.link} />
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PhpProject.map((project) => (
            <MuiCard key={project.id} title={project.title} details={project.details} image={project.image} link={project.link} />
          ))}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {LaravelProject.map((project) => (
            <MuiCard key={project.id} title={project.title} details={project.details} image={project.image} link={project.link} />
          ))}
        </div>
      </CustomTabPanel>
    </Box>
  );
}
