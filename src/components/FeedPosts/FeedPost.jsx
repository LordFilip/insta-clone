import React from "react";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter"; // Fixed component name
import PostHeader from "./PostHeader"; // Fixed component name

const FeedPost = ({ img, username, avatar }) => {
  return (
    <>
      <PostHeader username={username} avatar={avatar} />{" "}
      {/* Ensure the PostHeader component is correctly named */}
      <Box borderRadius={4} overflow={"hidden"}>
        <Image src={img} alt={username} />{" "}
      </Box>
      <PostFooter username={username} /> {/* Include PostFooter if needed */}
    </>
  );
};

export default FeedPost;
