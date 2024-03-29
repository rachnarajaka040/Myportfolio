import { Container, Divider, Heading, Img, Text } from "@chakra-ui/react";
import React from "react";
import ProjectLinkButtons from "./ProjectLinkButtons";
import ProjectStack from "./ProjectStack";
const MyProjectCard = ({
  projectTitle,
  images,
  description,
  github,
  livelink,
  techStack,
}) => {
  return (
    <Container
      maxW={["full", "full", "full", "full", "70%"]}
      mt="100px"
      display={["block", "block", "block", "flex", "flex"]}
    >
      <Container
        transform="rotate(45deg)"
        borderRadius={["3em", "3em"]}
        height={["240px", "320px"]}
        w={["240px", "320px"]}
        margin="auto"
        zIndex={1}
        //bg="#A75D5D"
        border=" 0.27rem solid white"
        _hover={{boxShadow:'5px 5px 20px #79d392'}}
      >
        <Container
          transform="rotate(-45deg)"
          color="white"
          height={["240px", "320px"]}
          w={["240px", "320px"]}
          marginLeft="-15px"
          py={["30px", "50px"]}
        >
          <Heading fontWeight="bold" size={["sm", "md"]}>
            {projectTitle}
          </Heading>
          <Divider borderColor="white" my='10px' />

          {" "}
          <Img
           
            src={images}
            boxSize="border-box"
            width="95%"
            _hover={[
              { transform: "scale(1.5)" },
              { transform: "scale(1.5)" },
              { transform: "scale(2)" },
              { transform: "scale(2.5)", ml: "150px" },
              { transform: "scale(2.5)", ml: "150px" },
            ]}
            borderRadius="10px"
          />
        </Container>
      </Container>

      <Container
        transform="rotate(45deg)"
        borderRadius={["2em", "3em"]}
        height={["200px", "280px"]}
        w={["200px", "280px"]}
        margin="auto"
        bg="#A75D5D"
        border="0.25rem solid white"
        _hover={{boxShadow:'5px 5px 20px #79d392'}}
      >
        {" "}
        <Container
          transform="rotate(-45deg)"
          height={["200px", "280px"]}
          w={["200px", "280px"]}
          px={["10px", "20px"]}
          
        >
          {" "}
          <Heading fontWeight="semibold" color="white" size={["xs", "sm"]} margin="5px">
            Summary
          </Heading>
          <Divider borderColor="white" w='100px' m='auto' />
          <Text margin={["10px", "20px"]} color="white" fontSize={["xs", "md"]} h="100px">
            {description}
          </Text>
        </Container>
      </Container>

      <Container
        transform="rotate(45deg)"
        borderRadius={["2em", "3em"]}
        height={["150px", "250px"]}
        w={["150px", "250px"]}
        margin="auto"
        bg="#A75D5D"
        border=" 0.25rem solid white"
        _hover={{boxShadow:'5px 5px 20px #79d392'}}
      >
        {" "}
        <Container
          transform="rotate(-45deg)"
          color="white"
          marginLeft="-15px"
          height={["150px", "250px"]}
          w={["150px", "250px"]}
          p="0px"
          paddingTop={[".1em", "2em"]}
        >
          {" "}
          <Text
            fontWeight="semibold"
            w={["10em", "10em"]}
            ml={["2.3em", "3em"]}
            fontSize={["10px", "md"]}
          >
            Tech Stack Used:
          </Text>
          <ProjectStack techStack={techStack} />
          <ProjectLinkButtons livelink={livelink} github={github} />
        </Container>
      </Container>
    </Container>
  );
};

export default MyProjectCard;
