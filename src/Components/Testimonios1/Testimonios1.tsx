import { Box, Heading, Text, Image, Center } from "@chakra-ui/react";
import React from "react";
import { bg, product } from "../assets";

export const Testimonios1 = () => {
  return (
    <Box
      bgImage={bg}
      bgSize="cover"
      bgPosition="inherit"
      bgRepeat="no-repeat"
      minH="743px"
      filter="contrast"
      pt={100}
      pb={100}
    >
      <Box maxW="1124px" mx="auto">
        <Heading
          as="h1"
          fontSize="36px"
          textAlign="center"
          color="white"
          mb={50}
        >
          EL SECRETO DE DIET FLAT V PARA LA DELGADEZ, EL BIENESTAR Y LA
          VITALIDAD{" "}
        </Heading>
        <Box
          boxShadow="base"
          p="6"
          rounded="xl"
          bg="#ffffffc7"
          mb={10}
          padding={[35,35,50,50 ]}
          ml={[10, 10, 10, 10]}
          mr={[10, 10, 10, 10]}
        >
          <Center flexDirection={["column", "column", "column", "inherit"]} alignItems="initial">
            <Text fontSize="24px" textAlign="initial" mr={[0,0,35,35 ]}>
              <Text fontWeight={700} mb={10}>¡El producto quemagrasas más popular del mundo! </Text>
              <Text fontSize={18}>Laura Maldonado,
              asesora en nutrición de Diet Flat V, recomienda consumirlo antes del desayuno y la cena,
              o antes de acostarse. Estimula el metabolismo, da energía para
              llevar una vida plena y, además, es beneficioso para la figura. El
              ciclo de adelgazamiento es de un mes. Este período debería ser
              suficiente para alcanzar resultados impresionantes.
                </Text>
            </Text>
            <Image src={product} alt="Dan Abramov" w="fit-content"  sx={{ filter: "drop-shadow(5px 5px 5px #222)" }} alignSelf="center"/>
          </Center>
        </Box>
      </Box>
    </Box>
  );
};
