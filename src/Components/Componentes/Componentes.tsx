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
import { cafe, cafeina, carnitina, cromo, taurina, vulgaris } from "../assets";

export const Componentes = () => {
  return (
    <Box bg="white" minH="743px" pb={9}>
      <Box maxW="1124px" mx="auto">
        <Heading
          as="h1"
          fontSize="36px"
          textAlign="center"
          color="black"
          mb={50}
          mt="140px"
        >
          ¡Una composición de alta calidad gracias a la cual transformarás tu
          cuerpo!
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
          <GridItem w="100%" h="auto" color="black" pt="20px">
            <Box>
              <Center position="relative">
                <Image mt={10} src={carnitina} alt="Dan Abramov" mr={5} />  
                <Text textShadow="1px 1px 2px black" fontWeight={700} fontSize="25px" color="white" position="absolute" left="50%" bottom="45px" transform={"translateX(-50%)"} > L-CARNITINA</Text>          
              </Center>
              
              <Text mt="50px">
                  Potente quemador de grasa que estimula la descomposición de la
                  grasa subcutánea en las zonas problemáticas y aumenta los
                  niveles de energía y actividad.
                </Text>
            </Box>
          </GridItem>
          <GridItem w="100%" h="auto" pt="20px">
            <Box>
              <Center position="relative">
                <Image mt={10} src={cafe} alt="Dan Abramov" mr={5} />
                <Text textShadow="1px 1px 2px black" fontWeight={700} fontSize="25px" color="white" position="absolute" left="50%" bottom="45px" transform={"translateX(-50%)"} > CAFÉ VERDE</Text>     
              </Center>
              <Text mt="50px">
                Activa las lipasas, las enzimas responsables de descomponer los
                depósitos de grasa; combate la celulitis, ayuda a mantener la
                elasticidad de la piel y evita la flacidez durante la pérdida de
                peso intensiva.
              </Text>
            </Box>
          </GridItem>
          <GridItem w="100%" h="auto" pt="20px">
            <Box>
              <Center position="relative">
                <Image mt={10} src={cromo} alt="Dan Abramov" mr={5} />
                <Text textShadow="1px 1px 2px black" fontWeight={700} fontSize="25px" color="white" position="absolute" left="50%" bottom="45px" transform={"translateX(-50%)"} > CROMO</Text>     
              </Center>
              <Text mt="50px">
                Normaliza los procesos metabólicos, acelera la quema de grasa
                visceral y favorece una pérdida de peso segura.
              </Text>
            </Box>
          </GridItem>
          <GridItem w="100%" h="auto" color="black" pt="20px">
            <Box>
              <Center position="relative">
                <Image mt={10} src={cafeina} alt="Dan Abramov" mr={5} />
                <Text textShadow="1px 1px 2px black" fontWeight={700} fontSize="25px" color="white" position="absolute" left="50%" bottom="45px" transform={"translateX(-50%)"} > CAFEÍNA</Text>     
              </Center>
              <Text mt="50px">
                Ayuda a descomponer la grasa parda, normaliza los niveles de
                azúcar en sangre, neutraliza el colesterol perjudicial, ayuda a
                controlar el apetito y a mantener un peso estable.
              </Text>
            </Box>
          </GridItem>
          <GridItem w="100%" h="auto" pt="20px">
            <Box>
              <Center position="relative">
                <Image mt={10} src={taurina} alt="Dan Abramov" mr={5} />
                <Text textShadow="1px 1px 2px black" fontWeight={700} fontSize="25px" color="white" position="absolute" left="50%" bottom="45px" transform={"translateX(-50%)"} > TAURINA</Text>     
              </Center>
              <Text mt="50px">
                Neutraliza los efectos de la malnutrición, reduce el consumo de
                calorías, ayuda a mantener la masa muscular y contribuye a crear
                un bonito relieve muscular.
              </Text>
            </Box>
          </GridItem>
          <GridItem w="100%" h="auto" pt="20px">
            <Box>
              <Center position="relative">
                <Image mt={10} src={vulgaris} alt="Dan Abramov" mr={5} />
                <Text textShadow="1px 1px 2px black" fontWeight={700} fontSize="25px" color="white" position="absolute" left="50%" bottom="45px" transform={"translateX(-50%)"} > PHASEOLUS VULGARIS</Text>     
              </Center>
              <Text mt="50px">
                Reduce el apetito, elimina los deseos de comer dulces, evita que
                se gane peso de nuevo, normaliza el metabolismo de los hidratos
                de carbono y de los lípidos y ayuda a mantener un peso normal.
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
