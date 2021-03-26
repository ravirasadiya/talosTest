import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

import "./PostCard.scss";
import { API_URL } from "utils/constants";
import { Chip } from "@material-ui/core";
import uniqueId from "utils/uniqueId";

const PostCard = ({ title, description, photoUrl, tags, onClickView }) => {
  return (
    <Card className="card-container">
      <CardActionArea onClick={onClickView}>
        <div className="image-container">
          <CardMedia
            className="card-image"
            image={
              photoUrl
                ? API_URL + photoUrl
                : process.env.PUBLIC_URL + "/placeHolder.png"
            }
            title="Contemplative Reptile"
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-bottom">
        <Typography variant="body1" color="initial" component="p">
          {tags.map((tag) => (
            <Chip
              label={tag}
              color="primary"
              variant="outlined"
              key={uniqueId("tagChip")}
            />
          ))}
          {/* {tags.join(", ")} */}
        </Typography>
        <Button size="small" color="primary" onClick={onClickView}>
          View
        </Button>
      </CardActions>
    </Card>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  photoUrl: PropTypes.string,
  tags: PropTypes.array,
  onClickView: PropTypes.func,
};

export default PostCard;
