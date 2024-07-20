import {
  Flex,
  Box,
  Text,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  UnlikeLogo,
  NotificationsLogo,
  CommentLogo,
} from "../../assets/constants";

function PostFooter({ username, isProfilePage }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  return (
    <>
      <Flex
        alignItems={"center"}
        gap={4}
        w={"full"}
        pt={0}
        mb={2}
        my={4}
        mt={"auto"}
      >
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize={"sm"} fontWeight={700}>
            {username}
            <Text as={"span"} fontWeight={400}>
              Feeling good
            </Text>
          </Text>
          <Text fontSize="sm" color={"gray"}>
            View all 1000 comments
          </Text>
        </>
      )}
      <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment..."}
            fontSize={14}
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.400"}
              cursor={"pointer"}
              fontWeight={600}
              _hover={{ color: "white" }}
              bg={"transparent"}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
    </>
  );
}

export default PostFooter;
