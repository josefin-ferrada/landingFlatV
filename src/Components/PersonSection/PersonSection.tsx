import { Box, Heading, Text, Image, Center } from "@chakra-ui/react";
import React from "react";
import { person, product } from "../assets";

export const PersonSection = () => {
  return (
    <>

      <Box display="flex">
        <Box w={['100%','100%', '100%', '50%', '50%']} p={['30px','30px', '30px', '0', '0']}>
        <Heading
        as="h1"
        fontSize="36px"
        textAlign="center"
        color="white"
        mb={50}
        mt="140px"
      >
        ¡RESULTADOS VISIBLES DESDE LOS PRIMEROS DÍAS!
      </Heading>
          <Text fontSize="20px">
            Diet Flat V contiene nutrientes que absorben activamente la grasa y
            la descomponen, eliminando todas las escorias y toxinas del cuerpo.
            Diet Flat V ayuda a acelerar el metabolismo, mejora la digestión,
            proporciona energía al cuerpo y ayuda a controlar el apetito.
            Además, natural Diet Flat V ayuda a corregir la figura y a mejorar
            la salud sin ejercicio adicional ni restricciones dietéticas.
          </Text>
          <Center>
          <Image  mt={20} src={product} alt="Dan Abramov" mr={5}  sx={{ filter: "drop-shadow(5px 5px 5px #222)" }} />
          </Center>
          
        </Box>

        <Image src={person} display={['none','none', 'none', 'block', 'block']} alt="Dan Abramov" mr={5} position="absolute" right="0px" bottom="0" />
      </Box>
    </>
  );
};
