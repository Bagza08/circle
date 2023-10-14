import { IThreadCard } from "@/interfaces/thread";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useThreadCard } from "../hooks/useThreadCard";
import { AiOutlineHeart } from "react-icons/ai";
import { LiaCommentSolid } from "react-icons/lia";
import moment from "moment";

export function ThreadCard(props: IThreadCard) {
  const navigate = useNavigate();
  const { handlePostLike } = useThreadCard();

  return (
    <>
      <Box
        display={"flex"}
        width="100%"
        borderBottom={"1px solid grey"}
        padding={"20px"}
      >
        <Image
          src={
            props.user?.picture ??
            "https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1918&q=80"
          }
          width={"50px"}
          height={"50px"}
          objectFit={"cover"}
          borderRadius={"50%"}
          marginRight={"20px"}
          alt="user_profile_image"
        />

        <Box display={"flex"} flexDirection={"column"}>
          <Box
            cursor={"pointer"}
            onClick={() => navigate(`/detail/${props.id}`)}
          >
            <Box display={"flex"} flexDirection={"column"} gap={2}>
              <Box display={"flex"}>
                <Text>{props.user?.full_name}</Text>
                <Text color="brand.grey">
                  @{props.user?.username} &#9679;{" "}
                  {moment(props.posted_at).startOf("minute").fromNow()}
                </Text>
              </Box>
              <Text>{props.content}</Text>
              <Image src={props.image} alt="" />
            </Box>
          </Box>

          <Box display={"flex"} gap={2} marginTop={"10px"}>
            <Button
              pl={0}
              variant="none"
              onClick={() => handlePostLike(props.id, props.is_liked)}
            >
              {props.is_liked ? (
                <AiOutlineHeart style={{ color: "red" }} />
              ) : (
                <AiOutlineHeart style={{ color: "white" }} />
              )}
              <Text ml={"5px"}>{props.likes_count}</Text>
            </Button>
            <Button pl={0} variant="none">
              <LiaCommentSolid />
              {props.replies_count} Replies
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}
