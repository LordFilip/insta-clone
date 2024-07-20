import FeedPost from "./FeedPost";
import {
  Container,
  SkeletonCircle,
  Skeleton,
  VStack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

function FeedPosts() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading &&
        [0, 1, 2, 3].map((_, idx) => (
          <VStack
            key={idx}
            gap={4}
            alignItems={"flex-start"}
            mb={10}
            w={"full"}
          >
            <Flex gap="2" w={"full"}>
              <SkeletonCircle size="10" />
              <VStack gap={2} alignItems={"flex-start"} w={"full"}>
                <Skeleton height="10px" w={"80%"} />
                <Skeleton height="10px" w={"60%"} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={"500px"} />
            </Skeleton>
          </VStack>
        ))}

      {!isLoading && (
        <>
          <FeedPost
            img="/img1.png"
            username="asaprogramer_"
            avatar="/img1.png"
          />
          <FeedPost img="/img2.png" username="burakomaz" avatar="/img2.png" />
          <FeedPost img="/img3.png" username="josh__" avatar="/img3.png" />
          <FeedPost img="/img4.png" username="_janedoooo_" avatar="/img4.png" />
        </>
      )}
    </Container>
  );
}

export default FeedPosts;
