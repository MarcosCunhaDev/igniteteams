import React from "react";
import { Container, Icon, Name } from "./styles";
import { ButtonIcon } from "../ButtonIcon";

interface PlayerProps {
  name: string;
  onCloseClick: () => void;
}

export const PlayerCard = ({ name, onCloseClick }: PlayerProps) => {
  return (
    <Container>
      <Icon name={"person"} />
      <Name>{name}</Name>
      <ButtonIcon onPress={onCloseClick} icon="close" type="secondary" />
    </Container>
  );
};
