import { Grid, VStack, Skeleton, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ProfilePost from "./profilePost";

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <Grid
      templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(3, 1fr)" }}
      gap={4} // Simplified gap
    >
      {isLoading
        ? [0, 1, 2, 3, 4, 5].map((_, idx) => (
            <VStack key={idx} spacing={4}>
              <Skeleton w="full" height="300px" alignItems="flexStart">
                <Box h="300px" />
              </Skeleton>
            </VStack>
          ))
        : ["/img1.png", "/img2.png", "/img3.png", "/img4.png"].map(
            (img, idx) => (
              <VStack key={idx} spacing={4}>
                <ProfilePost img={img} />
              </VStack>
            )
          )}
    </Grid>
  );
};

export default ProfilePosts;
