import React from "react";
import { Container } from "./styles";
import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

interface InputProps extends TextInputProps {}

export const Input = ({ ...rest }: InputProps) => {
  const theme = useTheme();
  return (
    <Container placeholderTextColor={theme.colors.gray_200} {...rest}>
      Input
    </Container>
  );
};
