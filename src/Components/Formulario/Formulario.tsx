import React from "react";
// import Axios from "axios";
import {
  FormControl,
  FormHelperText,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";

export const Formulario = ({ end }) => {
  const [phone, setPhone] = React.useState(0)
  const [name, setName] = React.useState('')


  const apiKey = 'KuZ2ThsRXHedjuXcsnCTFfnQGDan6AWtWJvDX4eMRmUPHc3gFP66WkRnj52Zbsk74DYsNRKK9CqtQYbeCjDbh4YhEUzS8GThcv2BjmZTBgjG9jJB98X6AjfrnyhPy44SXZDbkAQwHreWE6vctawvmhxB7YuwT2gCP2aj42WMufcjDPQzEND9AMdJGeSprN5yck6wXB6XB27xRs52WcrQpbqBUYBVQenQuGy5JsTVeqE4ZW92kxKjXT5mGbQXEzwV'
    const fetchData = () => {
      
      fetch(`https://api-blacksteel.clokpi.com/api/blacksteel/services/lead?order_id=000000000001&phone=${phone}&name=${name}&api_key=${apiKey}&good_id=34300&canal=prueba&anunciante=miguel` )
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
    };

    const handleInputChange = (e) => setName(e.target.value)
    const handlePhoneChange = (e) => setPhone(e.target.value)

    const handleSubmit = () => {
      fetchData()
    }

    // console.log(phone, name)

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
          id="nombre"
          type="text"
          borderRadius="none"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#cbd5e0"
          borderBottom={"1px solid #cbd5e0"}
          onChange={handleInputChange}
        />
        <FormHelperText fontSize="16px" textAlign="left">
          Nombre
        </FormHelperText>
        <Input
          id="phone"
          type="phone"
          borderRadius="none"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#cbd5e0"
          borderBottom={"1px solid #cbd5e0"}
          onChange={handlePhoneChange}
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
          onClick={handleSubmit}
        >
          Obtener una consulta
        </Button>
      </FormControl>
    </Box>
  );
};
