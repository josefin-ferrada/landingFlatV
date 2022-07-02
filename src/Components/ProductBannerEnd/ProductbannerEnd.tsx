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
  import { mujer2, product } from "../assets";
  import { Formulario } from "../Formulario/Formulario";
  import { Header } from "../Header/Header";
  
  export const ProductBannerEnd = () => {
    const CircleIcon = () => (
      <Icon viewBox="0 0 200 200" mr={2}>
        <path
          fill="#36a3bb"
          d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0"
        />
      </Icon>
    );
    return (
      <Box
        bg="white"
        minH="743px"
        pt={20}
        pb={9}
      >
        
        <Box maxW="1124px" mx="auto">
        <Heading as="h1" fontSize="32px" textAlign="center" color="#434343">
        No hay nada más fácil que deshacerse del exceso de peso con Diet Flat V
              </Heading>
              <Heading
                mt="30px"
                as="h2"
                fontSize="23px"
                textAlign="center"
              >
              ¡Ayuda a tu cuerpo a quemar toda la grasa!
              </Heading>
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
            <GridItem w="100%" h="auto" >
            <Center flexDirection="column">
                <Heading as="h5" fontSize={23} textAlign="center" color="#434343">
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
                  <Text color="#36a3bb" fontWeight={800} fontSize="34px">
                    29990 CLP
                  </Text>
                </Box>
              </Center>
              <Center>
                <Image src={product} alt="Dan Abramov" sx={{ filter: "drop-shadow(5px 5px 5px #222)" }} />
              </Center>
            </GridItem>
            <GridItem w="100%" h="auto" >
            <List
                spacing={3}
                mt="30px"
                display="flex"
                fontWeight={500}
                color="#434343"
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
              <Formulario end={true} />
              <Text
                color="#434343"
                fontWeight={700}
                fontSize="14px"
                fontStyle="oblique"
                textAlign="left"
              >
                Si deseas obtener más información acerca de Diet Flat V, deja tu
                nombre y número de teléfono. Nos pondremos en contacto contigo.
              </Text>
            </GridItem>
            <GridItem w="100%" h="auto" color="#434343" fontWeight={700} >
             
              <Center>
                <Image src={mujer2} alt="Dan Abramov" sx={{ filter: "drop-shadow(5px 5px 5px #222)" }} />
              </Center>
              
            </GridItem>


          </Grid>
        </Box>
        <Header end={true}/>
      </Box>
    );
  };
  