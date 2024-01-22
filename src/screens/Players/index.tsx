import { Header } from "@components/Header";
import { Button, Highlight, Input } from "@components/index";
import { useState } from "react";
import * as S from "./styles";

export function Players() {
  const [groups, setGroups] = useState([]);

  return (
    <S.Container>
      <Header version="secondary" />
      <Highlight
        title="Nome da turma"
        subtitle="adicione a galera e separe os times"
      />
    </S.Container>
  );
}
