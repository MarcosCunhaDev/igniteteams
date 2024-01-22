import { Header } from "@components/Header";
import {
  Button,
  ButtonIcon,
  Filter,
  Highlight,
  Input,
} from "@components/index";
import { useState } from "react";
import { Container, Form } from "./styles";

export function Players() {
  const [groups, setGroups] = useState([]);

  return (
    <Container>
      <Header version="secondary" />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" type="primary" />
      </Form>
      <Filter title="Time A" isActive />
    </Container>
  );
}
