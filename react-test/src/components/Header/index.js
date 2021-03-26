import React from "react";
import Typography from "@material-ui/core/Typography";

import "./styles.scss";
import { useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "utils/constants";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: 100,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
  },
}));

function Header() {
  const history = useHistory();
  const location = useLocation();
  const classes = useStyles();

  return (
    <div className="header-container">
      <AppBar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={() => {
              history.push(ROUTES.postList);
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/logo.svg"}
              id="add-icon"
              alt="Add Post"
            />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tacos Digital Test
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            onClick={() => {
              history.push(ROUTES.postList);
            }}
          >
            Posts
          </Typography>
          {!(location.pathname === ROUTES.addPost) && (
            <div
              id="add-container"
              onClick={() => {
                history.push(ROUTES.addPost);
              }}
            >
              <img
                src={process.env.PUBLIC_URL + "/plusSign.svg"}
                id="add-icon"
                alt="Add Post"
              />
              <Button id="add-text" variant="contained">
                Add Post
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
