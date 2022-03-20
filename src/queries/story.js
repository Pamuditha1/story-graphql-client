import { gql } from "@apollo/client";

export const STORIES = gql`
  query GET_STORIES {
    stories {
      id
      title
      details
      location
      timeStamp
      image
    }
  }
`;
