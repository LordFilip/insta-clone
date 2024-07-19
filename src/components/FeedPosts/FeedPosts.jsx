import FeedPost from "./FeedPost";
import { Container } from "@chakra-ui/react";

function FeedPosts() {
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </Container>
  );
}

export default FeedPosts;
