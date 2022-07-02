import { Box } from "@chakra-ui/react";

export const DividerCantidad = () => {
  return (
    <Box bg="#e2c496">
      <Box maxW="1124px" mx="auto">
        <Box
          h="auto"
          color="white"
          display="flex"
          fontSize="18px"
          fontWeight={600}
          flexDirection={["column", "column", "row"]}
          alignItems="flex-start"
        >
          <Box mr={5} p={3} minH="58px" justifyContent="end">
          QUEDAN
            <Box as="span" padding="3px 5px" bg="#937a54" borderRadius="5px" ml={2} mr={2}>
            25 
            </Box>
            
           PAQUETES EN PROMOCIÓN
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
