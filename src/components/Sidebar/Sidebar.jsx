import { Box, Flex, Avatar, Link, Tooltip, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import {
  NotificationsLogo,
  SearchLogo,
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
} from "../../assets/constants";

import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout";

const Sidebar = () => {
  const sidebarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <SearchLogo />,
      text: "Search",
      link: "/search",
    },
    {
      icon: <NotificationsLogo />,
      text: "Notifications",
      link: "/notifications",
    },
    {
      icon: <CreatePostLogo />,
      text: "Create",
      link: "/create",
    },
    {
      icon: <Avatar size={"sm"} name="Burak Orkmez" src="profilepic.png" />,
      text: "Profile",
      link: "/asaprogrammer",
    },
  ];
  const { handleLogout, isLoggingOut, error } = useLogout();
  return (
    <Box
      height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={"sticky"}
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={"column"} gap={10} w="full" height={"full"}>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "none", md: "block" }}
          cursor={"pointer"}
        >
          <InstagramLogo />
        </Link>
        <Link
          to={"/"}
          as={RouterLink}
          pl={2}
          display={{ base: "block", md: "none" }}
          cursor={"pointer"}
          borderRadius={6}
          _hover={{ bg: "whiteAlpha.200" }}
          w={10}
        >
          <InstagramMobileLogo />
        </Link>
        {sidebarItems.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            as={RouterLink}
            pl={2}
            cursor={"pointer"}
            display={"flex"}
            alignItems={"center"}
            gap={2}
            borderRadius={6}
            _hover={{ bg: "whiteAlpha.200" }}
            justifyContent={{ base: "center", md: "flex-start" }}
          >
            {item.icon}
            <Box display={{ base: "none", md: "block" }}>{item.text}</Box>
          </Link>
        ))}
        <Tooltip
          hasArrow
          label={"Logout"}
          placement="right"
          ml={1}
          openDelay={500}
          display={{ base: "block", md: "none" }}
        >
          <Flex
            onClick={handleLogout}
            alignItems={"center"}
            gap={4}
            borderRadius={6}
            p={2}
            w={{ base: 10, md: "full" }}
            mt={"auto"}
            justifyContent={{ base: "center", md: "flex-start" }}
            _hover={{ bg: "whiteAlpha.200" }} // Remove hover background and shadow
            boxShadow="none" // Ensure no box shadow is applied
            border="none" // Remove any border
          >
            <BiLogOut size={25} />
            <Button
              display={{ base: "none", md: "block" }}
              variant="ghost" // Remove default button styling
              _hover={{ bg: "transparent", boxShadow: "none" }} // Remove hover effects
              _focus={{ boxShadow: "none" }} // Remove focus shadow
              border="none" // Remove border
              p={0} // Remove padding
            >
              Logout
            </Button>
          </Flex>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default Sidebar;
