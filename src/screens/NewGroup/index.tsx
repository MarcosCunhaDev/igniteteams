import { Header } from "@components/Header";
import { Button, Highlight } from "@components/index";
import { useState } from "react";
import * as S from "./styles";

export function NewGroup() {
  const [groups, setGroups] = useState([]);

  return (
    <S.Container>
      <Header version="secondary" />
      <S.Content>
        <S.Icon />
        <Highlight
          title="Nova turma"
          subtitle="Crie a turma para adicionar as pessoas"
        />
        <Button title="Criar" />
      </S.Content>
    </S.Container>
  );
}
