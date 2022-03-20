import { useQuery } from "@apollo/client";
import React from "react";
import { STORIES } from "../queries/story";
import Story from "./Story";

function StoriesList() {
  const { loading, error, data } = useQuery(STORIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.stories.map((story) => (
    <React.Fragment key={story._id}>
      <Story />
    </React.Fragment>
  ));
}

export default StoriesList;
