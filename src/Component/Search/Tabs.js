import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FlightLandIcon from '@material-ui/icons/FlightLand';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import "./responsive.css"

import TextField from '@material-ui/core/TextField';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
        >
          <LinkTab label="ROUNDTRIP" href="/drafts" {...a11yProps(0)} />
          <LinkTab label="ONE-WAY" href="/trash" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel className="tabContent" value={value} index={0} >
        <div className="row ">
          <div className=" col-xs-12 col-sm-12 col-md-6">
          <div class="form-group inputFiled">
            <div className="iconDiv">
              <FlightTakeoffIcon style={{color:"#000000"}}/>
            </div>
            <select class="form-control " id="exampleFormControlSelect1">
              <option>Departure from</option>
              <option>item </option>
              <option>item </option>
              <option>item </option>
              <option>item </option>
              <option>item </option>
            </select>
          </div>
          </div>
          <div className="  col-xs-12 col-sm-12 col-md-6">
            <div class="form-group inputFiled">
              <div className="iconDiv">
                <FlightLandIcon style={{color:"#000000"}}/>
              </div>
              <select class="form-control " id="exampleFormControlSelect1">
                <option>Flying to</option>
                <option>item </option>
                <option>item </option>
                <option>item </option>
                <option>item </option>
                <option>item </option>
              </select>
            </div>
          </div>
          <div className="col-12 dataSelect">      
              <TextField 
              id="date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />            
            <div className="space_30"></div>      
            <TextField
              id="date"
              type="date"
              defaultValue="2017-05-24"
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />  
          </div>
          <div className="col-12 mt-3">
            <div className="searchIcon">
              <img src={require('../img/search_icon.png')}/>
            </div>
              <div className="economy_content">
                <div style={{float:'left'}}>
                  <img style={{maxHeight:'40px'}} src={require('../img/man.png')}/>
                </div>
                <div style={{maxWidth:'200px' ,float:"left"}}>
                  <div class="form-group inputFiled economy">
                    <select class="form-control " id="exampleFormControlSelect1">
                      <option>Economy</option>
                      <option>item </option>
                      <option>item </option>
                      <option>item </option>
                      <option>item </option>
                      <option>item </option>
                    </select>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        ONE-WAY
      </TabPanel>
    </div>
  );
}
