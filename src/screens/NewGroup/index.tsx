import { Header } from "@components/Header";
import { Button, Highlight, Input } from "@components/index";
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
        <Input placeholder="Nome da turma" />
        <Button title="Criar" style={{ marginTop: 20 }} />
      </S.Content>
    </S.Container>
  );
}
