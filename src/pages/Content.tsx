import * as React from "react";

import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import { User } from "./Home";
import Stories, { Story } from "./Stories";
import ViewerList from "./ViewerList";

const API = process.env.REACT_APP_API;

export interface Props {
  user: User;
}

const Content = (props: Props) => {
  const [selectedId, setId] = React.useState("");
  const [stories, setStories] = React.useState<Story[]>([]);
  const [storiesLoading, setStoriesLoading] = React.useState(true);

  const { user } = props;

  const onStoryClick = async (id: string) => {
    setId(id);
  };

  const fetchStories = async () => {
    const { data } = await axios.post(`${API}/stories`, user);
    setStoriesLoading(false);
    setStories(data);
  };

  React.useEffect(() => {
    fetchStories();
  }, []);

  return (
    <div>
      {storiesLoading && <CircularProgress />}
      <Stories stories={stories} onStoryClick={onStoryClick} />
      {selectedId && <ViewerList user={user} id={selectedId} />}
    </div>
  );
};

export default Content;
