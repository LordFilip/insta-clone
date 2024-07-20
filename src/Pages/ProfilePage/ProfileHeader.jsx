import {
  Flex,
  AvatarGroup,
  Avatar,
  VStack,
  Text,
  Button,
} from "@chakra-ui/react";

function ProfileHeader() {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: "column", sm: "row" }}
    >
      <AvatarGroup
        size={{ base: "xl", md: "2xl" }}
        justifySelf={"center"}
        alignSelf={"flex-start"}
        mx={"auto"}
      >
        <Avatar
          name="As a programer"
          src="/profilepic.png"
          alt="As a programmer logo"
        ></Avatar>
      </AvatarGroup>
      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{ base: "column", sm: "row" }}
          justifyContent={{ base: "center", sm: "flex-start" }}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{ base: "sm", md: "lg" }}>asprogrammer_</Text>
          <Flex gap={4} alignItems={"center"} justifyContent={"center"}>
            <Button
              bg={"white"}
              color={"black"}
              _hover={{ bg: "whiteAlpha.800" }}
              size={{ base: "xs", md: "sm" }}
            >
              Edit Profile
            </Button>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            <Text as={"spann"} fontWeight={"bold"} mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text>
            <Text as={"spann"} fontWeight={"bold"} mr={1}>
              145
            </Text>
            Following
          </Text>
          <Text>
            <Text as={"spann"} fontWeight={"bold"} mr={1}>
              145
            </Text>
            Followers
          </Text>
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text fontSize={"small"} fontWeight={"bold"}>
            As A programer
          </Text>
        </Flex>
        <Text fontSize={"small"} fontWeight={"normal"}>
          As A programer asdas das das faf asdfasdfaf asdfgsasd
        </Text>
      </VStack>
    </Flex>
  );
}

export default ProfileHeader;
