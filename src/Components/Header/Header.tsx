import { Box, Center, Image, Text } from "@chakra-ui/react";
import React from "react";
import { checkOscuro, hojaOscura, hojas, logocheck } from "../assets";

export const Header = ({ end }) => {
  return (
    <Box
      bg={
        end
          ? "linear-gradient(to bottom, rgba(226, 196, 150, 1) 0%, rgba(204, 172, 122, 1) 100%)"
          : "#ffffff66"
      }
    >
      <Box maxW="1124px" mx="auto">
        <Box
          h="auto"
          color="white"
          display="flex"
          fontSize="21px"
          fontWeight={900}
          flexDirection={["column", "column", "row"]}
          alignItems="flex-start"
        >
          <Center mr={5} p={[2, 2, 3, 3]} minH="58px">
            <Image src={end ? hojaOscura : hojas} alt="Dan Abramov" mr={5} />
            <Text fontSize={end ? ["14px", "14px", "14px", "14px"] : ["18px", "18px", "18px", "21px"]}>
              Composición natural
            </Text>
          </Center>

          <Center mr={5} p={[2, 2, 3, 3]} minH="58px">
            <Box minW={["64px", "64px", "inherit", "inherit"]}>
              <Image
                src={end ? checkOscuro : logocheck}
                alt="Dan Abramov"
                mr={5}
              />
            </Box>
            <Text
              fontSize={end ? ["14px", "14px", "14px", "14px"] : ["18px", "18px", "18px", "21px"]}
              textAlign="initial"
            >
              Efecto completo de mejora de la salud
            </Text>
          </Center>
          {end && (
            <Box fontSize="14px" mr={5} p={3} minH="58px" justifyContent="end">
              QUEDAN
              <Box
                as="span"
                padding="3px 5px"
                bg="#937a54"
                borderRadius="5px"
                ml={2}
                mr={2}
              >
                25
              </Box>
              PAQUETES EN PROMOCIÓN
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};
