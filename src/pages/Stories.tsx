import * as React from "react";

import { Avatar, Grid, Typography } from "@material-ui/core";

export interface Story {
  count: number;
  id: string;
  photo: Photo;
  photoPreview: Photo;
}

interface Photo {
  height: number;
  url: string;
  width: string;
}

const styles = {
  container: {
    display: "flex"
  },
  bigAvatar: {
    margin: 10,
    width: 120,
    height: 120
  }
};

interface Props {
  stories: Story[];
  onStoryClick: (id: string) => void;
}

function Stories(props: Props) {
  const { stories, onStoryClick } = props;

  return (
    <div style={styles.container}>
      {stories.map(story => (
        <Grid
          key={story.id}
          container
          alignItems="center"
          direction="column"
          onClick={() => onStoryClick(story.id)}
        >
          <Avatar src={story.photo.url} style={styles.bigAvatar} />
          <Typography>{story.count}</Typography>
        </Grid>
      ))}
    </div>
  );
}

export default Stories;
