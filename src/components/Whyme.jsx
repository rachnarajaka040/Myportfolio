import { ArrowBackIcon } from "@chakra-ui/icons";
import { Container, Text } from "@chakra-ui/react";
import React from "react";

const Whyme = () => {
  return (
      <Container
        transform="rotate(45deg)"
        borderRadius={["1em",'2em']}
        height={['100px',"200px"]}
        width={['100px',"200px"]}
        border=".25em solid"
        borderColor="white"
        bg="#A75D5D"
        p='0px'
        mr={['10px','50px','100px','200px','200px']}
        
      >
        <Container
          transform="rotate(-45deg)"
          height={['100px',"200px"]}
          width={['100px',"200px"]}
          p={['1em',"2.5em"]}
          
        >
          <Text fontSize={['.6em',"1.2em"]} color="white" marginTop={['1em','1em']} textAlign='center' fontWeight="semibold">
            Let me tell you why me?
          </Text>
          <ArrowBackIcon
            color="white"
            fontSize={['2em',"4em"]}
            transform="rotate(-45deg)"
            marginTop=".3em"
            marginRight='.5em'
          />
        </Container>
      </Container>
  );
};

export default Whyme;
