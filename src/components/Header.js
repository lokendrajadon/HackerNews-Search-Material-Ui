import { AppBar, Toolbar, Typography, Button } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import New from './New';
import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useGlobalContext } from './Context'
import Listing from "./Listing";
import Login from './Login'
import Error from './Error'
const useStyles = makeStyles((theme) => ({
  header: {
    backgroundColor: "#61dafb"
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#000",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px"
  }
}));


const Header = () => {
  const {headersData} = useGlobalContext()
  const classes = useStyles();
  return (
    <>
      <Router>
        <AppBar className={classes.header}>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" component="h1" className={classes.logo}>
              <Link className='logoLink' to='/'>HackerNews</Link>
            </Typography>
            {
              headersData.map((listingLabel, index) => {
                return (
                  <Button className={classes.menuButton} key={index}>
                    <Link className={listingLabel.class} to={listingLabel.href}>{listingLabel.label}</Link>
                  </Button>
                )
              })
            }
          </Toolbar>
        </AppBar>
        <Switch>
        <Route path="/" exact component={Listing} />
          <Route path="/new" exact component={New} />
          <Route path="/login" exact component={Login} />
          <Route path="*" exact component={Error} />
       </Switch>
      </Router>

    </>
  )
}

export default Header