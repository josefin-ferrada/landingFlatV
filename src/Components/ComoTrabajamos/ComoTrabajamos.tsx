import {
    Box,
    Center,
    Grid,
    GridItem,
    Heading,
    Image,
    Text,
  } from "@chakra-ui/react";
  import React from "react";
  import { bg5, entrega, llamada, realizas} from "../assets";
  
  export const ComoTrabajamos = () => {
    return (
      <Box bg="white" minH="743px" pb={9}  bgImage={bg5}
      bgSize="cover"
      bgPosition="inherit"
      bgRepeat="no-repeat">
        <Box maxW="1124px" mx="auto">
          <Heading
            as="h1"
            fontSize="36px"
            textAlign="center"
            color="white"
            mb={50}
            mt="140px"
          >
            COMO TRABAJAMOS
          </Heading>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(3, 1fr)",
              "repeat(3, 1fr)",
            ]}
            gap={6}
            padding="30px"
          >
            <GridItem w="100%" h="auto" color="white" pt="20px">
              <Box>
                <Center position="relative">
                  <Image mt={10} src={realizas} alt="Dan Abramov" mr={5} borderRadius="50%"/>  
                  
                </Center>
                
                <Text mt="50px">
                    Potente quemador de grasa que estimula la descomposición de la
                    grasa subcutánea en las zonas problemáticas y aumenta los
                    niveles de energía y actividad.
                  </Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="auto" pt="20px" color="white">
              <Box>
                <Center position="relative">
                  <Image mt={10} src={llamada} alt="Dan Abramov" mr={5}  borderRadius="50%"/>
                </Center>
                <Text mt="50px">
                  Activa las lipasas, las enzimas responsables de descomponer los
                  depósitos de grasa; combate la celulitis, ayuda a mantener la
                  elasticidad de la piel y evita la flacidez durante la pérdida de
                  peso intensiva.
                </Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="auto" pt="20px" color="white">
              <Box>
                <Center position="relative">
                  <Image mt={10} src={entrega} alt="Dan Abramov" mr={5} borderRadius="50%"/>
                </Center>
                <Text mt="50px">
                  Normaliza los procesos metabólicos, acelera la quema de grasa
                  visceral y favorece una pérdida de peso segura.
                </Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    );
  };
  