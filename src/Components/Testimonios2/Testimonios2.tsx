import {
  Box,
  Text,
  Image,
  Grid,
  GridItem,
  Center,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import React from "react";
import Slider from "react-slick";
import { t1, t2, t3, t4,} from "../assets";

export const Testimonios2 = () => {
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
    <Box
      bg="white"
      minH="743px"
      filter="contrast"
      pt={100}
      pb={100}
    >
      <Box
        maxW="1124px"
        mx="auto"
        color="black"
        sx={{
          ".slick-next": { right: "9px" },
          ".slick-next:before": { color: "#36A3BB" },
          ".slick-prev": { left: "-14px" },
          ".slick-prev:before": { color: "#36A3BB" },
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
                  src={t1}
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
              "He renovado por completo mi armario, ¡pero lo más importante es que tengo un nuevo novio!"
              </Heading>
              <Text textAlign="initial" fontSize="24px" > <Text as="span" color="#36A3BB">Rocío Segura 30 años</Text>, Santiago</Text>

              <List
                spacing={4}
                mt="30px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                fontSize="18px"
              >
                <ListItem textAlign="initial">
                  
                Solo tengo 30 años, pero hace poco pesaba más de 80 kg. También tengo muchos problemas con el
                  estómago,
                  por lo tanto, no todas las dietas son adecuadas para mí. Es difícil encontrar productos dietéticos de
                  calidad en nuestra pequeña ciudad. Nunca me han gustado los deportes - simplemente no me gusta hacer
                  ejercicio, pero todo cambió cuando me enteré de Diet Flat V. La composición es natural. Esto me impresionó
                  y convenció Empecé a tomarlo. El fabricante también recomienda beber 1,5 litros de
                  agua al día. ¡Estuve siguiendo todas las instrucciones durante un mes entero y por fin vi los
                  resultados! Es realmente increíble. Durante este tiempo he renovado por completo mi armario, ¡pero lo
                  más importante es que tengo un nuevo novio! ¡Flores, citas, paseos con luna llena! ¡Pensé que nunca
                  tendría todo esto en mi vida! Estoy pensando seguir con el curso de tratamiento. Después repetiré de
                  nuevo para mejorar y mantener los resultados.

                
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
                  src={t2}
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
                  ¡Puedo ponerme los vaqueros que llevaba antes del primer embarazo!
                "
              </Heading>
              <Text textAlign="initial" fontSize="24px" > <Text as="span" color="#36A3BB">Carolina Jiménez 30 años</Text>, Valparaíso</Text>

              <List
                spacing={4}
                mt="30px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                fontSize="18px"
              >
                <ListItem textAlign="initial">
                  
               
                Después de dar a luz a mi tercer hijo, no pude volver a ponerme en forma. Caderas colgando, piernas
                  gordas, barrigón... todo esto me molestaba mucho, pero no podía hacer nada al respecto. La cuestión es
                  que, como era madre de tres hijos, no tenía mucho tiempo libre... las dietas tampoco eran una buena
                  opción para mí porque soy alérgica a casi todoy. Además, estoy dando el pecho a mi bebé. Por lo tanto,
                  no es tan fácil elegir una alimentación adecuada. Mi vecina me dijo que su sobrina se deshizo de la
                  grasa en las caderas, las piernas y los costados después del parto con la ayuda de Diet Flat V. En el
                  sitio web se indicaba que podía perder 20 kilos en un mes. La verdad es que no me lo creí al
                  principio. ¿Cómo es posible? Sólo 2 pastillas al día y los kilos desaparecen por sí solos, ¿cómo es
                  posible? De todos modos examiné su composición, que es completamente natural, y leí las opiniones,
                  todas positivas. Decidí probarlo. Una semana después, comencé a sentir los primeros cambios. Me volví
                  más activa, mi sueño mejoró. Tal vez sea pura casualidad, pero mi estado de ánimo mejoró también. ¡En
                  dos semanas noté unos cambios muy fuertes y ya no podía ponerme los jeans que llevaba antes de mi
                  primer embarazo! Mi esposo está loco por estos cambios y no me deja tranquila. Tengo miedo de planear
                  otro bebé. Ahora sé cómo volver a ponerme en forma después del embarazo.

                

                
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
                  src={t3}
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
                  He limpiado el cuerpo y me he transformado por completo
                "
              </Heading>
              <Text textAlign="initial" fontSize="24px" > <Text as="span" color="#36A3BB">Carla Lobrego 34 años</Text>, Concepción</Text>

              <List
                spacing={4}
                mt="30px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                fontSize="18px"
              >
                <ListItem textAlign="initial">
                  
                
                Hasta cumplir los 27, participaba activamente en mantenerme delgada - me sentía bastante bien y en
                  forma, pero los años y los cambios hormonales no pasaron desapercibidos. No tenía fuerzas ni ganas de
                  hacer deporte y ponerme a dieta. Tuve que renovar mi armario, comprar ropa de una talla más. Luego,
                  otra
                  talla y otra... Podría haber acabado engordando aún más cuando mi amiga me trajo Diet Flat V y me dijo
                  que me lo tomara a diario. Además, también me recomendó beber más agua. La verdad es que no creía
                  mucho
                  en eso. ¡Imaginad mi sorpresa cuando, un mes después, pude ponerme mi ropa vieja! Es más, ¡me siento
                  segura de mí misma y llena de energía! Mi piel parece mucho más joven. No sé si es por Diet Flat V o
                  simplemente una coincidencia, ¡pero las básculas no pueden engañar! ¡Incluso creo que me he vuelto 10
                  años más joven!

                

                
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
                  src={t4}
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
                  Volví a mi forma anterior al embarazo en un mes
                "
              </Heading>
              <Text textAlign="initial" fontSize="24px" > <Text as="span" color="#36A3BB">Gloria 26 años</Text>, La Serena</Text>

              <List
                spacing={4}
                mt="30px"
                display="flex"
                flexDirection="column"
                alignItems="flex-start"
                fontSize="18px"
              >
                <ListItem textAlign="initial">
                  
                
                Tuve sobrepeso y pliegues de grasa después de dar a luz. Además, la alegría de la maternidad vino
                  acompañada de varices, así que tuve que olvidarme del gimnasio por completo, pero ¿cómo iba a perder
                  esos kilos de más sin hacer ejercicio? Comía de forma sana, pero no ayudaba. Me enteré de la
                  existencia de Diet Flat V por una chica del parque infantil. Lo único que hizo fue presumir todo el día:
                  "Diet Flat V! Diet Flat V! Cuánto peso perdí con Diet Flat V". Así que decidí seguir adelante y pedí también
                  esta cápsula. A decir verdad, no sé realmente qué pasa. En fin, decidí probarlo a pesar de todo. ¡No
                  me arrepentí en
                  absoluto!
                  Volví a mi forma anterior al embarazo en un mes. Acabo de pedirme más para seguir mejorando el
                  resultado. Las madres me miran con recelo porque no pueden creer que mi cambio haya sido gracias a
                  Diet Flat V, pero me parece que todas ya se lo han pedido también.

                

                
                </ListItem>
                
              </List>
            </GridItem>
          </Grid>
        </Slider>
      </Box>
    </Box>
  );
};
