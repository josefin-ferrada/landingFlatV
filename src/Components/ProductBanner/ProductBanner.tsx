import {
  Box,
  Grid,
  GridItem,
  Heading,
  Icon,
  List,
  ListItem,
  Image,
  Center,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { bg, product } from "../assets";
import { Formulario } from "../Formulario/Formulario";
import { Header } from "../Header/Header";

export const ProductBanner = () => {
  const CircleIcon = () => (
    <Icon viewBox="0 0 200 200" mr={2}>
      <path
        fill="#e2c496"
        d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
      />
    </Icon>
  );
  return (
    <Box
      bgImage={bg}
      bgSize="cover"
      bgPosition="inherit"
      bgRepeat="no-repeat"
      minH="743px"
      pb={9}
    >
      <Header end={false}/>
      <Box maxW="1124px" mx="auto">
        <Grid
          templateColumns={[
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(1, 1fr)",
            "repeat(3, 1fr)",
          ]}
          gap={6}
          padding="30px"
          
        >
          <GridItem w="100%" h="auto" color="white" fontWeight={700} pt="77px">
            <Heading as="h1" size="3xl" textAlign="initial">
              Diet Flat V
            </Heading>
            <Heading
              mt="30px"
              as="h2"
              fontSize="23px"
              textTransform="uppercase"
              textAlign="initial"
            >
              {" "}
              LLEGÓ DIET FLAT V PARA LOS AMANTES DE LOS DULCES, QUE SUEÑAN CON
              DESHACERSE DE LA GRASA.
            </Heading>

            <List
              spacing={3}
              mt="30px"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
            >
              <ListItem textAlign="initial">
                <CircleIcon />
                Absorbe la grasa y la convierte en energía
              </ListItem>
              <ListItem textAlign="initial">
                <CircleIcon />
                Elimina desechos y toxinas del cuerpo
              </ListItem>
              <ListItem textAlign="initial">
                <CircleIcon />
                Suprime el apetito y da energía
              </ListItem>
              <ListItem textAlign="initial">
                <CircleIcon />
                Elimina el exceso de líquido del cuerpo
              </ListItem>
              <ListItem textAlign="initial">
                <CircleIcon />
                Produce dopamina (la hormona de la felicidad)
              </ListItem>
            </List>
          </GridItem>
          <GridItem w="100%" h="auto" pt="77px">
            <Center>
              <Image src={product} alt="Dan Abramov" sx={{ filter: "drop-shadow(5px 5px 5px #222)" }} />
            </Center>
          </GridItem>
          <GridItem w="100%" h="auto" pt="77px">
            <Center flexDirection="column">
              <Heading as="h5" fontSize={23} textAlign="center" color="white">
                Deja tu solicitud para brindarte la consulta correspondiente
              </Heading>
              <Box>
                <Text
                  textDecor="line-through red"
                  color="#888888"
                  fontWeight={800}
                  fontSize="27px"
                >
                  59990 CLP
                </Text>
                <Text color="white" fontWeight={800} fontSize="34px">
                  29990 CLP
                </Text>
              </Box>
            </Center>
            <Formulario end={false} />
            <Text
              color="white"
              fontWeight={700}
              fontSize="14px"
              fontStyle="oblique"
              textAlign="left"
            >
              Si deseas obtener más información acerca de Diet Flat V, deja tu
              nombre y número de teléfono. Nos pondremos en contacto contigo.
            </Text>
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};
