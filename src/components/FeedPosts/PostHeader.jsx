import React from "react";
import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

const PostHeader = ({ username, avatar }) => {
  return (
    <Flex justifyContent="space-between" alignItems="center" w="full" my={2}>
      <Flex alignItems="center" gap={2}>
        <Avatar
          src={avatar}
          alt="User profile picture" // Updated alt text for clarity
          size="sm"
        />
        <Flex
          fontSize="sm" // Use a more standard font size
          fontWeight="bold"
          gap={2}
          alignItems="center" // Align text vertically in the center
        >
          <Text>{username}</Text>{" "}
          {/* Replace 'asdasddasd' with a meaningful username */}
          <Box color="gray.500">. 1w</Box>
        </Flex>
      </Flex>
      <Box cursor={"pointer"}>
        <Text
          fontSize={12}
          color={"blue.500"}
          fontWeight={"bold"}
          _hover={{ color: "white" }}
          transition={"0.2s ease-in-out"}
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
};

export default PostHeader;
