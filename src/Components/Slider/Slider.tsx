import { Box, Text, Image, Grid, GridItem, Center, Heading, List, ListItem } from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { test1, test2, test3, test4 } from "../assets";
import { PersonSection } from "../PersonSection/PersonSection";

export const Slider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    draggable: true,
    swipeToSlide: false,
    initialSlide: 0,
    slidesToShow: 1,
    variableWidth: false,
  };

  return (
    <Box bg="#2B9ECB" minH="743px" filter="contrast" position="relative" pt={100} pb={100}>
      <Box
        maxW="1124px"
        mx="auto"
        sx={{
          ".slick-next": { right: "9px" },
          ".slick-next:before": { color: "black" },
          ".slick-prev": { left: "-14px" },
          ".slick-prev:before": { color: "black" },
        }}
      >
        <Slider {...settings}>
        <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={6}
            padding="30px"
            display={['inherit !important','inherit !important',"inherit !important","flex !important"]}
          >
            <GridItem
              w="100%"
              h="auto"
            >
              <Center>
                <Image
                  src={test1}
                  alt="Dan Abramov"
                  sx={{ filter: "drop-shadow(5px 5px 5px #222)" }}
                />
              </Center>
            </GridItem>
            <GridItem
              w="100%"
              h="auto"
              color="black"
              fontWeight={700}

            >
              <Heading as="h1" fontSize="28px" textAlign="initial" mt={10}> 
              "
                  ¡Pensé que seguiría siendo gorda el resto de mi vida pero gracias a Diet Flat V ahora tengo un cuerpo
                  esbelto!
                "
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
                Marta, 28 años 
                </ListItem>
                <ListItem textAlign="initial">
                Gerente de personal 
                </ListItem>
                <ListItem textAlign="initial">
                Estuvo tomando Diet Flat V  <Text as="span" color="white">durante 65 días</Text>
                </ListItem>
                <ListItem textAlign="initial">
               Resultado: <Text as="span" color="white">-14,7kg</Text>
                </ListItem>
                
              </List>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={6}
            padding="30px"
            display={['inherit !important','inherit !important',"inherit !important","flex !important"]}
          >
            <GridItem
              w="100%"
              h="auto"
            >
              <Center>
                <Image
                  src={test2}
                  alt="Dan Abramov"
                  sx={{ filter: "drop-shadow(5px 5px 5px #222)" }}
                />
              </Center>
            </GridItem>
            <GridItem
              w="100%"
              h="auto"
              color="black"
              fontWeight={700}

            >
              <Heading as="h1" fontSize="28px" textAlign="initial" mt={10}> 
              "
                  
              Había llevado ropa suelta toda mi vida para ocultar mi cuerpo sin forma. ¡Gracias a Diet Flat V ahora
                  solo me pongo faldas cortas y tengo muchos admiradores!
                
                "
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
                Gabriela, 35 años 
                </ListItem>
                <ListItem textAlign="initial">
                Contadora
                </ListItem>
                <ListItem textAlign="initial">
                Estuvo tomando Diet Flat V  <Text as="span" color="white">durante 37 días</Text>
                </ListItem>
                <ListItem textAlign="initial">
               Resultado: <Text as="span" color="white">-5kg</Text>
                </ListItem>
                
              </List>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={6}
            padding="30px"
            display={['inherit !important','inherit !important',"inherit !important","flex !important"]}
          >
            <GridItem
              w="100%"
              h="auto"
            >
              <Center>
                <Image
                  src={test3}
                  alt="Dan Abramov"
                  sx={{ filter: "drop-shadow(5px 5px 5px #222)" }}
                />
              </Center>
            </GridItem>
            <GridItem
              w="100%"
              h="auto"
              color="black"
              fontWeight={700}

            >
              <Heading as="h1" fontSize="28px" textAlign="initial" mt={10}> 
              "
                  
              
              ¡Gracias a Diet Flat V conseguí un vientre plano en solo un mes! ¡Es un milagro y nada de dietas!
                
                
                "
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
                Julia, 24 años 
                </ListItem>
                <ListItem textAlign="initial">
                Administradora
                </ListItem>
                <ListItem textAlign="initial">
                Estuvo tomando Diet Flat V  <Text as="span" color="white">durante 31 días</Text>
                </ListItem>
                <ListItem textAlign="initial">
               Resultado: <Text as="span" color="white">-4kg</Text>
                </ListItem>
                
              </List>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={6}
            padding="30px"
            display={['inherit !important','inherit !important',"inherit !important","flex !important"]}
          >
            <GridItem
              w="100%"
              h="auto"
            >
              <Center>
                <Image
                  src={test4}
                  alt="Dan Abramov"
                  sx={{ filter: "drop-shadow(5px 5px 5px #222)" }}
                />
              </Center>
            </GridItem>
            <GridItem
              w="100%"
              h="auto"
              color="black"
              fontWeight={700}

            >
              <Heading as="h1" fontSize="28px" textAlign="initial" mt={10}> 
              "
                  
              
              
              Después del embarazo me convertí en un sapo hinchado... Diet Flat V me ayudó a deshacerme de la
                  grasa. ¡Mi hija tiene una madre delgada otra vez!
                
                
                
                "
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
                Cristina, 33 años 
                </ListItem>
                <ListItem textAlign="initial">
                Abogada
                </ListItem>
                <ListItem textAlign="initial">
                Estuvo tomando Diet Flat V  <Text as="span" color="white">durante 92 días</Text>
                </ListItem>
                <ListItem textAlign="initial">
               Resultado: <Text as="span" color="white">-28kg</Text>
                </ListItem>
                
              </List>
            </GridItem>
          </Grid>
        </Slider>

        <PersonSection/>
      </Box>
    </Box>
  );
};
