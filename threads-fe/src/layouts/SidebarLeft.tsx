import { Box, Text, Button } from "@chakra-ui/react";
import {
  BsHeart,
  BsHouseDoor,
  BsSearch,
  BsFillPersonFill,
  BsFillDoorOpenFill,
  BsHouseDoorFill,
} from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
//import { useLogin } from "../../hooks/loginHook";

export default function SidebarLeftNew() {
  const navigate = useNavigate();
  const location = useLocation();
  //const { handleLogout } = useLogin();
  return (
    <>
      <Box position={"fixed"} h={"1vh"} w={"22%"} pt={"10px"} px={"50px"}>
        <Text fontWeight={"bold"} fontSize={"40px"} color={"green"}>
          Circle
        </Text>
        <Button
          pl={0}
          onClick={() => navigate("/")}
          variant={"none"}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
          mt={"20px"}
        >
          {location.pathname === "/" ? <BsHouseDoorFill /> : <BsHouseDoor />}{" "}
          Home
        </Button>
        <Button
          pl={0}
          variant={"none"}
          onClick={() => navigate("/search")}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          <BsSearch /> Search
        </Button>
        <Button
          pl={0}
          variant={"none"}
          onClick={() => navigate("/follows")}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          <BsHeart /> Follows
        </Button>
        <Button
          pl={0}
          variant={"none"}
          onClick={() => navigate("/profile")}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          <BsFillPersonFill /> Profile
        </Button>
        <Button
          mt={"20px"}
          colorScheme="green"
          borderStyle={"none"}
          color={"white"}
          bg={"green"}
          w={"100%"}
          borderRadius={"20px"}
        >
          Create Post
        </Button>

        <Text
          //onClick={handleLogout}
          cursor={"pointer"}
          mt={"200px"}
          display={"flex"}
          flexDirection={"row"}
          gap={"3"}
          alignItems={"center"}
          fontSize={"20px"}
          color={"grey.900"}
          mb={"20px"}
        >
          <BsFillDoorOpenFill /> Logout
        </Text>
      </Box>
    </>
  );
}
