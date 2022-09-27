import React from "react";
import { useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormHelperText,
  Input,
  Box,
  Button,
} from "@chakra-ui/react";


export const Formulario = ({ end }) => {
  const [phone, setPhone] = React.useState(0);
  const [name, setName] = React.useState("");
  const [loading, setLoading] = React.useState(false)
  const [success, setButtonSuccess] = React.useState(false)
  const navigate = useNavigate();
  
  function handleClick() {
    navigate('/sendForm')
  }

  const apiKey =
    "KuZ2ThsRXHedjuXcsnCTFfnQGDan6AWtWJvDX4eMRmUPHc3gFP66WkRnj52Zbsk74DYsNRKK9CqtQYbeCjDbh4YhEUzS8GThcv2BjmZTBgjG9jJB98X6AjfrnyhPy44SXZDbkAQwHreWE6vctawvmhxB7YuwT2gCP2aj42WMufcjDPQzEND9AMdJGeSprN5yck6wXB6XB27xRs52WcrQpbqBUYBVQenQuGy5JsTVeqE4ZW92kxKjXT5mGbQXEzwV";
  const idNumber = Math.floor(
    Math.pow(10, 12 - 1) +
      Math.random() * (Math.pow(10, 12) - Math.pow(10, 12 - 1) - 1)
  );

  const fetchData = () => {
    setLoading(true)
    fetch(
      `http://api-blacksteel.clokpi.com/api/blacksteel/services/lead/rs?order_id=${idNumber}&phone=${phone}&name=${name}&api_key=${apiKey}&good_id=34300&canal=trifuerza&anunciante=landing1`,
      {
        method: "POST",
      }
    )
      .then((res) => {
        setLoading(false)
        setButtonSuccess(true)
        console.log(res);
      })
      .catch((err) => {
        setLoading(false)
        console.log(err);
      });
  };

  const handleInputChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value.trim().replace('+', ''));

  const handleSubmit = () => {
    handleClick();
    fetchData();
  }

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
          type="number"
          borderRadius="none"
          borderTop="none"
          borderLeft="none"
          borderRight="none"
          borderColor="#cbd5e0"
          borderBottom={"1px solid #cbd5e0"}
          onChange={handlePhoneChange}
          maxLength={10}
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
          colorScheme={success ? 'green' : 'teal'}
          id="purchase"
          isLoading={loading}
          type="submit"
          onClick={handleSubmit}
        >
          {success ? 'Enviado exitosamente' : 'Obtener una consulta'}
        </Button>
      </FormControl>
    </Box>
  );
};
