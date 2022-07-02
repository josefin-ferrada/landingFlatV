import React from "react";
import { Text } from "@chakra-ui/react";
import { ComoTomar } from "../ComoTomar/ComoTomar";
import { ComoTrabajamos } from "../ComoTrabajamos/ComoTrabajamos";
import { Componentes } from "../Componentes/Componentes";
import { DividerCantidad } from "../DividerCantidad/DividerCantidad";
import { ProductBanner } from "../ProductBanner/ProductBanner";
import { ProductBannerEnd } from "../ProductBannerEnd/ProductbannerEnd";
import { Slider1 } from "../Slider/Slider";
import { Testimonios1 } from "../Testimonios1/Testimonios1";
import { Testimonios2 } from "../Testimonios2/Testimonios2";
import { Transforma } from "../Transforma/Transforma";

export const Layout = () => {
  return (
    <>
      <ProductBanner />
      <DividerCantidad />
      <Testimonios1 />
      <Slider1 />
      <Componentes />
      <ComoTomar />
      <Transforma />
      <Testimonios2 />
      <ComoTrabajamos />
      <ProductBannerEnd />
      <Text as="span" color="red" pb={5}>
        © 2022 Copyright. All rights reserved. Privacy policy | Report
      </Text>
    </>
  );
};
