import { Box, Center, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'
import { agua, bg3, calendario, product, reloj } from '../assets'

export const ComoTomar = () => {
  return (
    <Box
      bgImage={bg3}
      bgSize="cover"
      bgPosition="inherit"
      bgRepeat="no-repeat"
      minH="743px"
      filter="contrast"
      pt={100}
      pb={200}
    >
      <Box maxW="1124px" mx="auto">
        <Heading
          as="h1"
          fontSize="46px"
          textAlign="center"
          color="white"
          mb={50}
        >
          ¿Cómo tomar Diet Flat?
        </Heading>
        <Center flexDirection={["column", "column", "column", "inherit"]} alignItems="initial">
        <Box
          boxShadow="base"
          p="6"
          rounded="xl"
          bg="white"
          mb={10}
          padding={[35,35,50,50 ]}
          ml={[10, 10, 10, 10]}
          mr={[10, 10, 10, 10]}
        >
         
            <Text fontSize="24px" textAlign="initial" mr={[0,0,35,35 ]}>
            <Box display="flex" alignItems="center" mb={30} max-width="fit-content" alignSelf="center">
            <Image mr="30px"src={agua} alt="Dan Abramov"/> <Text fontSize="18px">Toma 1 cápsula al día</Text>
            </Box>
            <Box display="flex" alignItems="center" mb={30}>
            <Image mr="30px"src={reloj} alt="Dan Abramov"/> <Text fontSize="18px"> Toma cada cápsula con un poco de agua o jugo</Text>
            </Box>
            <Box display="flex" alignItems="center" mb={30}>
            <Image mr="30px"src={calendario} alt="Dan Abramov"/> <Text fontSize="18px">Curso de tratamiento recomendado - 1 mes</Text>
            </Box>
            
            </Text>
            </Box>
            <Image src={product} alt="Dan Abramov" maxW="fit-content" alignSelf="center"/>
          
      
        </Center>
      </Box>
    </Box>
  )
}
