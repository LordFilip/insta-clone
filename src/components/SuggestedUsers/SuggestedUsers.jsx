import { VStack, Flex, Text, Box } from "@chakra-ui/react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

function SuggestedUsers() {
  return (
    <VStack py={8} px={6} gap={4}>
      <SuggestedHeader />
      <Flex alignItems="center" justifyContent="space-between" w="full">
        <Text fontSize="12px" fontWeight="bold" color="gray.500">
          Suggested posts
        </Text>
        <Text
          fontSize="12px"
          fontWeight="bold"
          _hover={{ color: "gray.400" }}
          cursor="pointer"
        >
          See All
        </Text>
      </Flex>
      <SuggestedUser name="John Doe" followers={1200} avatar="/img1.png" />
      <SuggestedUser name="Jane Smith" followers={980} avatar="/img2.png" />
      <SuggestedUser
        name="Michael Johnson"
        followers={1500}
        avatar="/img3.png"
      />
      <SuggestedUser name="Emily Davis" followers={2300} avatar="/img4.png" />

      <Box fontSize={12} color={"gray.500"} mt={5}>
        2024 Bult By Fiip
      </Box>
    </VStack>
  );
}

export default SuggestedUsers;
