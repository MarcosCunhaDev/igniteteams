import React from "react";
import { Container, ButtonTypeStyleProps, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

export const Button = ({ title, type = "Primary", ...rest }: ButtonProps) => {
  return (
    <Container type={type} {...rest}>
      <Title>{title}</Title>
    </Container>
  );
};
