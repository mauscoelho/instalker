import * as React from "react";

import {
  CircularProgress,
  Grid,
  List,
  Paper,
  Typography
} from "@material-ui/core";
import axios from "axios";
import Viewer, { ViewerModel } from "src/components/Viewer";
import { User } from "./Home";

const API = process.env.REACT_APP_API;

export interface Response {
  me: number;
  notFollowMe: ViewerModel[];
  notFollowMeCount: number;
  viewersCount: number;
  viewers: ViewerModel[];
}

interface Props {
  user: User;
  id: string;
}

function ViewerList(props: Props) {
  const [storyLoading, setStoryLoading] = React.useState(true);
  const [story, setStory] = React.useState<Response | undefined>(undefined);
  const { id, user } = props;

  const fetchStory = async () => {
    setStoryLoading(true);
    const result = await axios.post(`${API}/viewersById`, {
      ...user,
      id
    });
    setStoryLoading(false);
    setStory(result.data as Response);
  };

  React.useEffect(() => {
    fetchStory();
  }, [id]);

  if (storyLoading) {
    return <CircularProgress />;
  }

  if (story) {
    return (
      <Grid>
        <Paper>
          <Typography variant="title" gutterBottom>{`Not follow me: ${
            story.notFollowMeCount
          }`}</Typography>
          <List>
            {story.notFollowMe.map(viewer => (
              <Viewer key={viewer.id} viewer={viewer} />
            ))}
          </List>
        </Paper>
        <Paper>
          <Typography variant="title" gutterBottom>{`Follow me: ${
            story.viewersCount
          }`}</Typography>
          <List>
            {story.viewers.map(viewer => (
              <Viewer key={viewer.id} viewer={viewer} />
            ))}
          </List>
        </Paper>
      </Grid>
    );
  }

  return null;
}

export default ViewerList;
