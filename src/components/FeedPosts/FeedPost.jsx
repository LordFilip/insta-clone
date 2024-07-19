import React from "react";
import { Box, Image } from "@chakra-ui/react";
import PostFooter from "./PostFooter"; // Fixed component name
import PostHeader from "./PostHeader"; // Fixed component name

const FeedPost = () => {
  return (
    <>
      <PostHeader /> {/* Ensure the PostHeader component is correctly named */}
      <Box>
        <Image src="img1.png" alt="User profile pic" />{" "}
      </Box>
      <PostFooter /> {/* Include PostFooter if needed */}
    </>
  );
};

export default FeedPost;
