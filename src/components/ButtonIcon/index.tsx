import React from "react";
import { Container, ButtonIconStyleType, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface Props extends TouchableOpacityProps {
  type?: ButtonIconStyleType;
  icon: keyof typeof MaterialIcons.glyphMap;
}

export const ButtonIcon = ({
  type = "primary",
  icon = "home",
  ...rest
}: Props) => {
  return (
    <Container type={type} {...rest}>
      <Icon name={icon} type={type} />
    </Container>
  );
};
