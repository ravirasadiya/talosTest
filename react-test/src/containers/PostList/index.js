import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { fetchPosts } from "redux/post/post.slice";
import uniqueId from "utils/uniqueId";
import { useHistory } from "react-router-dom";
import { ROUTES } from "utils/constants";
import PostCardComponent from "components/PostCardComponent";
import "./PostList.scss";

function PostList() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  return (
    <Container maxWidth="xl">
      <Grid container spacing={5} alignItems="stretch" className="postList">
        {posts.map((post) => (
          <Grid item xs={12} sm={6} md={4} xl={3} key={uniqueId("mediaCard")}>
            <PostCardComponent
              title={post.title}
              description={post.description}
              photoUrl={post.photoUrl}
              tags={post.tags}
              onClickView={() => {
                history.push(ROUTES.postDetails(post.id));
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default PostList;
