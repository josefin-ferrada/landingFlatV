import {
  Box,
  Heading,
  Image,
  ListItem,
  GridItem,
  Grid,
  Center,
  List,
  Icon,
} from "@chakra-ui/react";
import React from "react";
import { bgWaves,product } from "../assets";

export const Transforma = () => {
    const CircleIcon = () => (
        <Icon viewBox="0 0 16 16" mr={2}>
          <rect style={{fill:"#58bccb"}} width="58" height="58"/>
        </Icon>
      );
  return (
    <Box
      bgImage={bgWaves}
      bgSize="cover"
      bgPosition="inherit"
      bgRepeat="no-repeat"
      minH="743px"
      filter="contrast"
      pt={100}
      pb={200}
      m="-140px auto"
      w={['unset',null,null,null]}

    >
      <Box maxW="1124px" mx="auto">
      <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(2, 1fr)",
            "repeat(2, 1fr)",
          ]}
          gap={6}
          padding="30px"
          
        >
            <GridItem w="100%" h="auto" pt="77px" display={['none','none', 'block', 'block']}>
            <Center>
              <Image src={product} alt="Dan Abramov" sx={{ filter: "drop-shadow(5px 5px 5px #222)" }} />
            </Center>
          </GridItem>
          <GridItem w="100%" h="auto" color="white" fontWeight={700} pt="77px">
            <Heading as="h1" fontSize="34px" textAlign="initial">
            ¡CON DIET FLAT V TRANSFORMARÁS TU CUERPO Y MEJORARÁS TU SALUD!
            </Heading>

            <List
              spacing={4}
              mt="30px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              fontSize="18px"
            >
              <ListItem textAlign="initial">
                <CircleIcon />
                Transforma la grasa en energía, da vitalidad
              </ListItem>
              <ListItem textAlign="initial">
                <CircleIcon />
                Reduce el apetito y sacia el hambre
              </ListItem>
              <ListItem textAlign="initial">
                <CircleIcon />
                Mejora el metabolismo
              </ListItem>
              <ListItem textAlign="initial">
                <CircleIcon />
                Limpia el cuerpo de desechos y el exceso de líquido
              </ListItem>
              <ListItem textAlign="initial">
                <CircleIcon />
                Mejora el estado de ánimo y evita las crisis nerviosas
              </ListItem>
            </List>
          </GridItem>
          
        </Grid>
      </Box>
    </Box>
  );
};
