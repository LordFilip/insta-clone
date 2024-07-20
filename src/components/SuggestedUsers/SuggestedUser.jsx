import { Flex, Avatar, Box, Button, VStack } from "@chakra-ui/react";
import { useState } from "react";

function SuggestedUser({ followers, name, avatar }) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Flex justifyContent="space-between" alignItems="center" w="full">
      <Flex alignItems="center" gap={2}>
        <Avatar src={avatar} name={name} size="md" />
        <VStack spacing={2}>
          <Box>
            <Box fontWeight="bold" fontSize={12}>
              {name}
            </Box>
            <Box fontSize={11} color="gray.500">
              {followers} followers
            </Box>
          </Box>
        </VStack>
      </Flex>
      <Button
        fontSize={13}
        bg={"transparent"}
        p={0}
        h={"max-content  "}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{ color: "white" }}
        onClick={() => setIsFollowed(!isFollowed)}
      >
        {isFollowed ? "Unfollow" : "Follow"}
      </Button>
    </Flex>
  );
}

export default SuggestedUser;
