import React from "react";
import Typography from "@material-ui/core/Typography";

import "./styles.scss";
import { useHistory, useLocation } from "react-router-dom";
import { ROUTES } from "utils/constants";

function Header() {
  const history = useHistory();
  const location = useLocation();

  return (
    <div className="header-container">
      <div
        id="logo-div"
        onClick={() => {
          history.push(ROUTES.postList);
        }}
      >
        {/* logo */}
        <Typography gutterBottom variant="h4" component="h4">
          Talos Technical Test
        </Typography>
      </div>
      <div id="right-container">
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
        {!(location.pathname === ROUTES.newPost) && (
          <div
            id="add-container"
            onClick={() => {
              history.push(ROUTES.newPost);
            }}
          >
            <h4 id="add-text">Add New Post</h4>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
