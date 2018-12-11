import * as React from "react";
import { ListItem, Avatar, ListItemText } from "@material-ui/core";

export interface ViewerModel {
  id: number;
  picture: string;
  username: string;
}

interface Props {
  viewer: ViewerModel;
}

const Viewer = ({ viewer }: Props) => {
  return (
    <ListItem>
      <Avatar src={viewer.picture} />
      <ListItemText primary={viewer.username} />
    </ListItem>
  );
};

export default Viewer;
