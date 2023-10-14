import {
  CardBody,
  Card,
  Image,
  Stack,
  Box,
  Heading,
  Text,
  Button,
  Avatar,
  Flex,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { RootState } from "@/stores/types/rootState";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";

export default function SidebarRight() {
  const auth = useSelector((state: RootState) => state.auth);

  return (
    <>
      <Card p={"10px"} m={"20px"} borderRadius={"10px"}>
        <CardBody>
          <Heading size="sm" mb={"20px"}>
            My Profile
          </Heading>
          <Image
            h={"100px"}
            w={"100%"}
            objectFit={"cover"}
            src="https://plus.unsplash.com/premium_photo-1690446901279-7855ff5af591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=600&q=60"
            borderRadius="lg"
          />
          <Stack mt="3" spacing="1">
            <Box display={"flex"} justifyContent={"space-between"}>
              <Avatar
                bg={"red"}
                mt={"-12"}
                ml={"20px"}
                size="lg"
                name="Prosper Otemuyiwa"
                src={
                  auth.picture
                    ? auth.picture
                    : "https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1918&q=80"
                }
              ></Avatar>
              <Button borderRadius={"20px "}>Edit Profile</Button>
            </Box>

            <Heading size="md">{auth.full_name}</Heading>
            <Text opacity={"0.5"}>@{auth.username}</Text>
            <Text fontSize={"14px"}>
              {auth.description ??
                "This sofa is perfect for modern tropical spaces"}
            </Text>
            <Box display={"flex"} flexDirection={"row"}>
              <Text fontSize={"14px"} mx={"2px"}>
                {auth.followings_count ?? 0}
              </Text>
              <Text fontSize={"14px"} mx={"2px"} opacity={"0.5"}>
                Following
              </Text>
              <Text fontSize={"14px"} mx={"2px"}>
                {auth.followers_count ?? 0}
              </Text>
              <Text fontSize={"14px"} mx={"2px"} opacity={"0.5"}>
                Followers
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      {/* suggested for you */}
      <Card p={"10px"} m={"20px"} borderRadius={"10px"}>
        <Heading ms={"20px"} mt={"20px"} size="sm">
          Suggested for you
        </Heading>
        <CardBody>
          {/* 1 */}
          <Flex
            mt={"10px"}
            flex="1"
            gap="4"
            alignItems="center"
            flexWrap="wrap"
          >
            <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
              <Avatar
                objectFit={"cover"}
                name="Segun Adebayo"
                src="https://images.unsplash.com/photo-1687360441205-807780a8e5db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              />
              <Box>
                <Heading fontSize={"sm"}>Amelia Smith</Heading>
                <Text fontSize={"sm"} color={"grey"}>
                  @Amelia Smith
                </Text>
              </Box>
            </Flex>
            <Button
              colorScheme="green"
              type="submit"
              borderRadius={"20px"}
              bg={"green"}
              color={"white"}
            >
              Follow
            </Button>
          </Flex>
          {/* 2 */}
          <Flex
            mt={"20px"}
            flex="1"
            gap="4"
            alignItems="center"
            flexWrap="wrap"
          >
            <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
              <Avatar
                objectFit={"cover"}
                name="Segun Adebayo"
                src="https://images.unsplash.com/photo-1682695794947-17061dc284dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw5M3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              />
              <Box>
                <Heading fontSize={"sm"}>Ethan Johnson</Heading>
                <Text fontSize={"sm"} color={"grey"}>
                  @Ethan Johnson
                </Text>
              </Box>
            </Flex>
            <Button
              colorScheme="green"
              type="submit"
              borderRadius={"20px"}
              bg={"green"}
              color={"white"}
            >
              Follow
            </Button>
          </Flex>
          {/* 3 */}
          <Flex
            mt={"20px"}
            flex="1"
            gap="4"
            alignItems="center"
            flexWrap="wrap"
          >
            <Flex flex="1" gap="3" alignItems="center" flexWrap="wrap">
              <Avatar
                objectFit={"cover"}
                name="Segun Adebayo"
                src="https://images.unsplash.com/photo-1687360440102-78d15c3e5045?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw3OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
              />
              <Box>
                <Heading fontSize={"sm"}>Olivia Brown</Heading>
                <Text fontSize={"sm"} color={"grey"}>
                  @Olivia Brown
                </Text>
              </Box>
            </Flex>
            <Button
              colorScheme="green"
              type="submit"
              borderRadius={"20px"}
              bg={"green"}
              color={"white"}
            >
              Follow
            </Button>
          </Flex>
        </CardBody>
      </Card>
      <Card p={"10px"} m={"20px"} borderRadius={"10px"}>
        <CardBody>
          <Flex gap={3} alignItems={"center"}>
            <Heading fontSize={"smaller"}>
              Developed by Bagza Jaya Wiguna
            </Heading>
            <Text>&#9679;</Text>
            <AiFillGithub />
            <AiFillLinkedin />
            <AiFillFacebook />
            <AiFillInstagram />
          </Flex>
        </CardBody>
      </Card>
    </>
  );
}
