import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import PostCardComponent from "components/PostCardComponent";
import axios from "axios";

function PostCard() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((response) => {
      setPosts(response.data);
    });
  });

  return (
    <Container maxWidth="xl" className="post-list-container">
      <Grid container spacing={5} alignItems="stretch">
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={post.id}>
            <PostCardComponent
              title={post.title}
              description={post.description}
              photoUrl={post.photoUrl}
              tags={post.tags}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PostCard;
