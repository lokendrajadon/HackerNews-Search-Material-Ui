import { Typography, Button } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useGlobalContext } from './Context'
const useStyles = makeStyles((theme) => ({

  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
  },
  footerElements: {
    margin: "auto"
  },
  footer: {
    backgroundColor: "#61dafb",
    padding: theme.spacing(2),
    position: 'fixed',
    left: '0',
    right : '0',
    bottom : '0'
  },
}));

const Footer = () => {
  const classes = useStyles();
  const { footersData } = useGlobalContext()
  return (
    <>
      <Router>
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom>
            <div className={classes.footerElements}>
              {
                footersData.map((listingLabel, index) => {
                  return (
                    <Button className={classes.menuButton} key={index} to={listingLabel.href}>
                      <Link className={listingLabel.class} to={listingLabel.href}>{listingLabel.label}</Link>
                    </Button>
                  )
                })
              }
            </div>
          </Typography>
        </footer>
        <Switch>
          <Route path="/new">
            {/* <New /> */}
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
           </Route> */}
        </Switch>
      </Router>
    </>
  )
}

export default Footer
