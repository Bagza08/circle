import { ThreadCard, useThreadDetail } from "@/features/thread";
import {
  Avatar,
  Box,
  Flex,
  FormControl,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";

export default function Detail() {
  const { thread, handlePost, handleChange, replies } = useThreadDetail();

  return (
    <>
      <Box display={"flex"} justifyContent={"center"}>
        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={"column"}
          width="600px"
          borderRight={"1px solid"}
          borderLeft={"1px solid"}
          borderColor={"brand.grey"}
          padding={"20px"}
        >
          <ThreadCard
            id={thread?.id}
            user={thread?.user}
            content={thread?.content}
            posted_at={thread?.posted_at}
            image={thread?.image}
            likes_count={thread?.likes_count}
            replies_count={thread?.replies_count}
            is_liked={thread?.is_liked}
          />
          <Flex marginTop={"20px"} gap={4} w={"100%"}>
            <Avatar
              objectFit={"cover"}
              name="Segun Adebayo"
              src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1918&q=80"
            />
            <form onSubmit={handlePost} encType="multipart/form-data">
              <FormControl display={"flex"} flexDirection={"column"} gap={2}>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                  gap={2}
                >
                  <Input
                    w={"400px"}
                    placeholder="What is happening?!"
                    name="content"
                    onChange={handleChange}
                  />
                  <Input
                    borderRadius={"full"}
                    cursor={"pointer"}
                    type="submit"
                    backgroundColor={"brand.green"}
                    color={"white"}
                    colorScheme="green"
                    value={"Reply"}
                    fontSize={"15px"}
                    width={"70px"}
                  />
                </Box>
              </FormControl>
            </form>
          </Flex>
          <Box>
            {replies?.map((reply) => {
              return (
                <Box
                  key={reply.id}
                  display={"flex"}
                  alignItems={"center"}
                  width={"600px"}
                  padding={"20px"}
                >
                  <Image
                    src={
                      reply.user?.picture
                        ? reply.user?.picture
                        : "https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1918&q=80"
                    }
                    width={"50px"}
                    height={"50px"}
                    objectFit={"cover"}
                    borderRadius={"50%"}
                    marginRight={"20px"}
                    alt="user_profile_image"
                  />
                  <Text>{reply.content} </Text>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </>
  );
}
