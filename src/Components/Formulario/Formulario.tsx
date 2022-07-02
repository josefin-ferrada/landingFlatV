import React from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

export const Formulario = ({ end }) => {
  return (
    <Box
      boxShadow="base"
      p="6"
      rounded="xl"
      bg={end ? "#ebebeb" : "white"}
      mt={5}
      mb={10}
      padding={35}
    >
      <FormControl>
        <Input
          id="email"
          type="email"
          borderRadius="none"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#cbd5e0"
          borderBottom={"1px solid #cbd5e0"}
        />
        <FormHelperText fontSize="16px" textAlign="left">
          Nombre
        </FormHelperText>
        <Input
          id="phone"
          type="email"
          borderRadius="none"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#cbd5e0"
          borderBottom={"1px solid #cbd5e0"}
        />
        <FormHelperText fontSize="16px" textAlign="left">
          Teléfono
        </FormHelperText>
        <Button
          borderRadius={30}
          p={5}
          minH="40px"
          mt={10}
          size="xl"
          colorScheme="teal"
          // isLoading={props.isSubmitting}
          type="submit"
        >
          Obtener una consulta
        </Button>
      </FormControl>
    </Box>
  );
};
